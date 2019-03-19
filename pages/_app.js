import React from 'react'
import Head from 'next/head'
import { Provider } from 'react-redux'
import App, { Container } from 'next/app'
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'
import Router from 'next/router'

import "@babel/polyfill"

import initStore from '../utils/store'
import GlobalStyle from '../styled/GlobalStyle'

function trackPageView(url) {
  try {
    window.gtag('config', 'UA-35957550-1', {
      page_location: url
    });
  } catch (error) {
    // silences the error in dev mode
    // and/or if gtag fails to load
  }
}

// NodeList.forEach polyfill
if (typeof window !== "undefined") {
  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
  }
}
/* debug to log how the store is being used */

class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		let pageProps = {}

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx)
			console.log(pageProps	)
			if (!pageProps.hasOwnProperty('pageShadow')) {
				pageProps.pageShadow = false
			}
		}
			return { pageProps }
	}
	componentDidMount() {
    Router.onRouteChangeComplete = url => {
      trackPageView(url);
    };
  }
	render() {
		const { Component, pageProps, store } = this.props
		return (
			<Container>
				<Head>
					<title>Tân Thiên Long - VNG</title>
					<meta name="title" content="Tân Thiên Long Mobile - VNG - Tuyệt tác kiếm hiệp Kim Dung" />
					<meta name="Tái hiện thế giới kiếm hiệp đan xen tình duyên một cách chân thật nhất" />
					<meta name="keywords" content="Tân Thiên Long Mobile, tân thiên long mobile, tan thien long, tan thien long mobile, ttlm, ttlm vng, tanthienlong, tan thien long mobi, tan thien long moblie, ttlm zing vn, ttlm.zing.vn, tan thien long mobile vng, tanthienlong mobile" />
					<meta name="description" content="Game TTLM phiên bản kế thừa và phát triển những tính năng của dòng game Thiên Long Bát Bộ. Môn phái kinh điển: Cái Bang - Kiều Phong, Nga Mi Thiên Long Thiên Sơn, Tiêu Dao - Hư Trúc. Huyết Chiến Giang Hồ 2019. VNG độc quyền phát hành. Game mobile kiếm hiệp mới." />
					<meta property="og:image" content="http://ttlm.zing.vn/static/img/mobile_subpage_header.jpg" />
					<meta property="og:title" content="Tân Thiên Long Mobile - VNG - Tuyệt tác kiếm hiệp Kim Dung" />
					<meta property="og:description" content="Tái hiện thế giới kiếm hiệp đan xen tình duyên một cách chân thật nhất" />
					<meta property="og:url" content="http://ttlm.zing.vn" />
					<meta name="google-site-verification" content="S-FZUdm1KMgv1dIxgiZ2qedlKuvD1dYhSbgxtCWAp0s"></meta>
				</Head>
				<Provider store={store}>
					<Component {...pageProps} />
				</Provider>
				<GlobalStyle pageShadow={pageProps.pageShadow} />
			</Container>
		)
	}
}

export default withRedux(initStore, {
	debug: typeof window !== 'undefined' && process.env.NODE_ENV !== 'production'
})(withReduxSaga({ async: true })(MyApp))

import 'isomorphic-fetch'

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
					<meta name="title" content="Tân Thiên Long Mobile - VNG: Tuyệt tác kiếm hiệp Kim Dung" />
					<meta name="keywords" content="Tân Thiên Long Mobile,tân thiên long mobile,tan thien long,tan thien long mobile,ttlm,ttlm vng,tanthienlong,tan thien long mobi,tan thien long moblie,ttlm zing vn,ttlm.zing.vn,tan thien long mobile vng,tanthienlong mobile" />
					<meta name="description" content="Tân Thiên Long Mobile là Game Mobile nhập vai kiếm hiệp mang cốt truyện Thiên Long Bát Bộ với hàng loạt trận tranh bá giang hồ đầy máu lửa." />
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

import React from 'react'
import Head from 'next/head'
import { Provider } from 'react-redux'
import App, { Container } from 'next/app'
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'

import initStore from '../utils/store'
import GlobalStyle from '../styled/GlobalStyle'


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

	render() {
		const { Component, pageProps, store } = this.props
		return (
			<Container>
				<Head>
					<title>Tân Thiên Long - VNG</title>
					<meta name="title" content="Tân Thiên Long Mobile - VNG - Tuyệt tác kiếm hiệp Kim Dung" />
					<meta name="Tái hiện thế giới kiếm hiệp đan xen tình duyên một cách chân thật nhất" />
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

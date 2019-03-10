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
		}
		if (!pageProps.pageShadow) {
			pageProps.pageShadow = false
		}
			return { pageProps }
	}

	render() {
		const { Component, pageProps, store } = this.props
		return (
			<Container>
				<Head>
					<title>Tân Thiên Long - VNG</title>
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

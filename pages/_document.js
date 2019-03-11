import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
	static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />),
    );
    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }
	render() {
		return (
			<html style={{  }}>
				<Head>
					<meta
						name="viewport"
						content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"
					/>
					<meta name="theme-color" content="#b73a3a" />
					<link rel="manifest" href="/static/manifest.json" />
					<link rel="icon" href="/static/img/favicon.ico" />
					<meta property="og:image" content="/static/im/mobile_subpage_header.jpg" />
					<meta property="og:image:width" content="154" />
					<meta property="og:image:height" content="81" />
					<meta property="og:title" content="An awesome page" />
					<meta property="og:description" content="Everything you need to know about the topic you are looking for" />
					<meta property="og:url" content="http://ttl.zing.vn"></meta>
					{this.props.styleTags}
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		)
	}
}

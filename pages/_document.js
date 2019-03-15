import { Fragment } from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
	static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />),
    );
    const styleTags = sheet.getStyleElement();
		// Check if in production
		const isProduction = process.env.NODE_ENV === 'production';

    return { ...page, styleTags, isProduction };
	}
	// Function will be called below to inject
  // script contents on to page
  setGoogleTags() {
    return {
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-35957550-1');
      `
    };
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
					{this.props.styleTags}
					{/* <script async src="https://www.googletagmanager.com/gtag/js?id=UA-35957550-1"></script>
					<script>
						window.dataLayer = window.dataLayer || []
						function gtag(){dataLayer.push(arguments)}
						gtag('js', new Date())

						gtag('config', 'UA-35957550-1')]
					</script> */}
				</Head>
				<body>
					<Main />
					<NextScript />
					{this.props.isProduction ?
						<Fragment>
							<script async src="https://www.googletagmanager.com/gtag/js?id=UA-35957550-1"></script>
							{/* We call the function above to inject the contents of the script tag */}
							<script dangerouslySetInnerHTML={this.setGoogleTags()} />
						</Fragment>
					: ''}
				</body>
			</html>
		)
	}
}

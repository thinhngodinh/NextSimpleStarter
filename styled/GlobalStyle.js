import { createGlobalStyle, keyframes } from 'styled-components'

const backgroundAnimation = keyframes`
	0%{background-position:19% 0%}
	50%{background-position:82% 100%}
	100%{background-position:19% 0%}
}
`

const GlobalStyle = createGlobalStyle`
	html {
		background: '#EEE';
		color: '#444';
		font-size: 10px;
		font-family: 'arial'
	}
  body {
		margin: 0 auto;
		max-width: 1400px;
		background: url(/static/img/page_bg.jpg) no-repeat center top;
		background-size: cover;
		background-attachment: fixed;
	}
	#__next {
		box-shadow: 0px 3px 106px -28px rgba(0,0,0,1);
	}
	.hidden {
		display: none
	}
	a {
		text-decoration: none;
	}
	input,
	label,
	button,
	textarea
	{
		margin:0;
		border:0;
		padding:0;
		display:inline-block;
		vertical-align:middle;
		white-space:normal;
		background:none;
		line-height:1;

		/* Browsers have different default form fonts */
		font-size:13px;
		font-family:Arial;
	}
	input:focus
	{
		outline:0;
	}
`

export default GlobalStyle

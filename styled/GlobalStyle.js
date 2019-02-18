import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
	html {
		background: '#EEE';
		color: '#444';
		font-size: 10px;
		font-family: 'arial'
	}
  body {
    margin: 0
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

import { createGlobalStyle, keyframes, css } from 'styled-components'

const GlobalStyle = createGlobalStyle`
	html {
		background: '#EEE';
		color: '#444';
		font-size: 10px;
		font-family: 'arial'
	}
	@media (max-width: 480px) {
		body{padding-top: 30px;}
	}
  body {
		margin: 0 auto !important;
		${props => props.pageShadow === true ? css`max-width: 1400px;` : css`max-width: 100%;`}
		background: url(${props => props.pageShadow === true ? '/static/img/page_bg.jpg' : '/static/img/sub_page_bg.jpg' }) no-repeat center top;
		background-size: ${props => props.pageShadow === true ? 'cover' : 'auto'};
		${props => props.pageShadow !== true && css`background-position: center 453px;`}
		${props => props.pageShadow === true && css`background-attachment: fixed;`};
	}
	#__next {
		box-shadow: ${props => props.pageShadow === true ? '0px 3px 106px -28px rgba(0,0,0,1)' : 'none'};
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
	.button-back {
		display: inline-block;
		background: #b71e1d;
		padding: 10px;
		flex-basis: 100px;
		border-radius: 50px;
		text-align: center;
		color: white;
		position: relative;
		transition: background 0.3s;
		&:hover {
			background: #d82b2a;
		}
		&:before {
			content: '';
			width: 93%;
			height: 83%;
			display: block;
			position: absolute;
			border: 1px solid #ffffff87;
			border-radius: 50px;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
	}
	@import "/static/libs/slick/slick.css";
	@import "/static/libs/slick/slick-theme.css";
	@import "/static/libs/tabs/react-tabs.css";
`

export default GlobalStyle

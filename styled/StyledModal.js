import styled, { createGlobalStyle, keyframes } from 'styled-components'
import { fadeIn, bounceInDown } from 'react-animations'

const fadeInAnimation = keyframes`${fadeIn}`
const bouceInDownAnimation = keyframes`${bounceInDown}`

const StyleRegisterBox = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	background: #00000050;
	top: 0; left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	.backdrop {
		background: #00000080;
		cursor: pointer;
		position: absolute;
		width: 100%;
		height: 100%;
		animation: 0.5s ${fadeInAnimation};
	}
	.modal-container {
		background: url('/static/img/modalbg.jpg') no-repeat center center;
		width: 350px;
		height: 357px;
		z-index: 1;
		position: relative;
		justify-content: center;
		align-items: center;
		display: flex;
		animation: 1s ${bouceInDownAnimation};
		.modal-title {
			display: block;
			position: absolute;
			top: 13px;
			left: 50%;
			transform: translate(-50%, 0);
		}
		.modal-content {
			padding-top: 82px;
			width: 100%;
			height: 71%;
			padding-right: 20px;
			padding-left: 20px;
			padding-bottom: 20px;
			display: flex;
			justify-content: center;
			.resp{
				p.message {
					font-size: 1.4rem;
					line-height: 1.6;
				}
			}
			.button-ok {
				display: inline-block;
				width: 150px;
				height: 43px;
				cursor: pointer;
				filter: grayscale(30%);
				background: url('/static/img/btn-ok.png') no-repeat center center;
				transition: filter 0.3s ease-in;
				:hover {
					filter: grayscale(0);
				}
			}
			span.register-name {
				text-transform: capitalize;
			}
			.registerForm {
				width: 100%;
				padding: 0 35px;
				text-align: center;
			}
			form {
				.formfield {
					margin-bottom: 15px;
					label, input {
						display: block;
						margin-bottom: 5px;
						width: 100%;
						text-align: center;
					}
					label{ color: #9d1001;}
					input {
						padding: 10px 0;
						background: #00000020;
					}
					.error {
						input {
							border: 1px solid #ff000066;
						}
					}
					.field {
						position: relative;
						.error-message {
							display: block;
							position: absolute;
							bottom: 2px;
							right: 5px;
							color: red;
							font-style: italic;
							font-size: 0.9rem;
						}
					}
				}
			}
		}
		.closebtn {
			display: block;
			background: url(/static/img/closebtn.png) no-repeat top center;
			position: absolute;
			top: -18px;
			right: -18px;
			width: 32px;
			height: 32px;
			border-radius: 32px;
			:hover {
				background-position: bottom center;
			}
		}
	}
`
export default StyleRegisterBox

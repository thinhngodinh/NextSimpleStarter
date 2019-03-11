import styled, { keyframes } from 'styled-components'

import { rollIn, fadeIn, pulse } from 'react-animations'

const fadeInAnimation = keyframes`${fadeIn}`
const pulseAnimation = keyframes`${pulse}`

const BlurEffect = keyframes`
	0% {
		opacity: 0;
		filter: blur(20px);
		transform: scale(1.5);
	}
	100% {
		opacity: 1;
		filter: blur(0);
		transform: scale(1);
	}
`;

const RotateEffect = keyframes`
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(359deg);
	}
`;

const Styled = {
	FrameContent: styled.div`
		width: 996px;
		height: 727px;
		position: relative;
		@media (max-width: 480px) {
			height: 1240px;
			.framefooter {
				top: 670px !important;
				height: 573px !important;
				background-size: 414px;
				.totaluser-gift {
					display: none;
				}
				.btn-register {
					width: 100%;
					top: 460px !important;
					left: 0 !important;
					text-align: center;
				}
				.user-counter{
					width: 100%;
					font-size: 2rem;
					font-weight: 600;
					color: #b91a18 !important;
					top: 539px !important;
					right: 0 !important;
					text-align: center !important;
				}
				.mobile-footer-title {
					width: 100%;
					text-align: center;
					display: block !important;
					padding-top: 10px;
					> img {
						width: 100%;
					}
				}
			}
		}
		.framefooter {
			position: absolute;
			width: 100%;
			height: 142px;
			top: 520px;
			left: 0;
			@media (min-width: 481px) {
				background: none !important;
			}
			.mobile-footer-title {
				display: none;
			}
			.t-c-link {
				display: block;
				position: absolute;
				width: 30px;
				height: 88px;
				top: 20px;
				right: 137px;
				@media(max-width: 480px) {
					background: url(/static/img/t-c-bg.gif) no-repeat center center;
					background-size: contain;
					right: 90vw;
					top: 76px;
				}
			}
			.user-counter{
				display: block;
				position: absolute;
				font-size: 2rem;
				color: #fff;
				top: 107px;
				right: 872px;
				text-align: right;
				@media (min-width: 481px) {
					.label {
						display: none;
					}
				}
			}
			.totaluser-gift {
				position: absolute;
				right: 240px;
			}
			.btn-register {
				display: block;
				position: absolute;
				top: 33px;
				left: 63px;
				:hover {
					animation: 0.4s ${pulseAnimation};
				}
			}
		}
	`,
	Logo: styled.img`
		position: absolute;
		top: 20px;
		left: 50%;
    transform: translate(-50%, 0);
	`,
	Title: styled.img`
		opacity: 1;
		animation: 0.5s ${BlurEffect} ease-out;
		position: absolute;
		top: 161px;
		left: 219.7px;
		@media (max-width: 480px) {
			display: none;
		}

	`,
};

export default Styled;

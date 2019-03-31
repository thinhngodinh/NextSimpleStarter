import styled, { keyframes } from 'styled-components'

import { fadeIn, pulse } from 'react-animations'

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

const Styled = {
	FrameContent: styled.div`
		width: 996px;
		height: 865px;
		position: relative;

		.play-btn {
			width: 100px;
			height: 100px;
			background: radial-gradient( rgba(142, 142, 142, 0.8) 60%,rgb(181, 165, 165) 62%);
			border-radius: 50%;
			position: relative;
			display: block;
			margin: 100px auto;
			box-shadow: 0px 0px 25px 3px rgb(75, 75, 75);
			cursor: pointer;
		}

		/* pulse wave */
		.play-btn:before {
			content: "";
			position: absolute;
			width: 150%;
			height: 150%;
			-webkit-animation-delay: 0s;
			animation-delay: 0s;
			-webkit-animation: pulsate1 2s;
			animation: pulsate1 2s;
			-webkit-animation-direction: forwards;
			animation-direction: forwards;
			-webkit-animation-iteration-count: infinite;
			animation-iteration-count: infinite;
			-webkit-animation-timing-function: steps;
			animation-timing-function: steps;
			opacity: 1;
			border-radius: 50%;
			border: 5px solid rgba(255, 0, 0, 0.4);
			top: -30%;
			left: -30%;
			background: rgba(198, 16, 0, 0);
			filter: blur(2px);
		}

		@-webkit-keyframes pulsate1 {
			0% {
				-webkit-transform: scale(0.6);
				transform: scale(0.6);
				opacity: 1;
				box-shadow: inset 0px 0px 25px 3px rgba(255, 255, 255, 0.75), 0px 0px 25px 10px rgba(255, 255, 255, 0.75);
			}
			100% {
				-webkit-transform: scale(1);
				transform: scale(1);
				opacity: 0;
				box-shadow: none;

			}
		}

		@keyframes pulsate1 {
			0% {
				-webkit-transform: scale(0.6);
				transform: scale(0.6);
				opacity: 1;
				box-shadow: inset 0px 0px 25px 3px rgba(255, 255, 255, 0.75), 0px 0px 25px 10px rgba(255, 255, 255, 0.75);
			}
			100% {
				-webkit-transform: scale(1, 1);
				transform: scale(1);
				opacity: 0;
				box-shadow: none;

			}
		}
		.yt-single-player {
			outline: none;
			position: absolute;
			bottom: 0;
			left: 275px;
		}
		.video-playlist {
			position: fixed;
			top: 0;
			left: 0;
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 100%;
			background: #000000c2;
			z-index: 2;
			flex-direction: column;
			.backdrop {
				position: absolute;
				width: 100%;
				height: 100%;
				z-index: -1;
				cursor: pointer;
			}
			.closeButton {
				position: absolute;
				top: 10px;
				right: 10px;
				width: 32px;
				height: 32px;
				background: url(/static/img/closebtn.png) center top;
				&:hover {
					background-position: center bottom;
				}
			}
			.playlist {
				.youtube-item img {
					height: 100px;
				}
			}
		}
		@media (max-width: 480px) {
			height: 720px;
			.yt-single-player {
				bottom: 90px !important;
				left: 50% !important;
				transform: translate(-50%, 0) scale(0.8);
			}
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

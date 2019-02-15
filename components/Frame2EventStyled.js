import styled, { keyframes } from 'styled-components'

import { rollIn, fadeIn, pulse } from 'react-animations'

const rollInAnimation = keyframes`${rollIn}`
const fadeInAnimation = keyframes`${fadeIn}`
const pulseAnimation = keyframes`${pulse}`

const Styled = {
	EventClass : styled.div`
		display: flex;
		position: absolute;
		width: 100%;
		height: 100%;
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
			background: url('/static/img/gamepopup.png') no-repeat center center;
			width: 680px;
			height: 680px;
			z-index: 1;
			position: relative;
			justify-content: center;
			align-items: center;
			display: flex;
			border-radius: 400px;
			animation: 1s ${rollInAnimation};
			.modal-content {
				width: 347px;
				height: 500px;
				transform: translateX(6px);
			}
			.closebtn {
				display: block;
				background: url(/static/img/closebtn.png) no-repeat top center;
				position: absolute;
				top: 81px;
				right: 79px;
				width: 32px;
				height: 32px;
				border-radius: 32px;
				:hover {
					background-position: bottom center;
				}
			}
		}
		.event-navigation {
			width: 80%;
			margin: 0 auto;
			ul {
				display: flex;
				justify-content: center;
				margin: 0;
				padding: 0;
				list-style: none;
				flex-wrap: wrap;
			}
			li.naviItem {
				margin: 1px;

				&.active {
					a {
						background: #9e0b0f;
						color: #fff;
					}
				}
				a {
					display: inline-block;
					background: #fce69c;
					color: #5f5f5f;
					font-size: 1.6rem;
					padding: 5px 10px;
					text-transform: capitalize;
					transition: 0.3s background;
					&:hover {
						animation: 0.4s ${pulseAnimation};
						background: #9e0b0f;
						color: white;
					}
				}
			}
		}
	`
}

export default Styled;

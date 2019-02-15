import styled, { keyframes } from 'styled-components'
import { tada, pulse } from 'react-animations'

const handMove = keyframes`
	0% {
		transform: translate(-40%, 40%)
	}
	50% {
		transform: translate(0, 0)
	}
	100% {
		transform: translate(-40%, 40%)
	}
`
const tadaAnimation = keyframes`${tada}`

const pulseAnimation = keyframes`${pulse}`

const Styled = {
	FrameContent: styled.div`
		width: 996px;
		height: 724px;
		position: relative;
		display: flex;
		align-items: center;
		.term-btn {
			position: absolute;
			top: 265px;
			left: 216px;
			.btn {
				display: inline-block;
				background: url('/static/img/thele.png') no-repeat;
				height: 47px;
				&:hover{
					animation: 0.4s ${pulseAnimation};
				}
				&.qua {
					width: 116px;
					background-position: bottom right;
					&:hover {
						background-position: top right;
					}
				}
				&.thele {
					width: 124px;
					background-position: bottom left;
					&:hover {
						background-position: top left;
					}
				}
			}
		}
		.start-event {
			position: absolute;
			top: 340px;
			left: 280px;
			.btn-start {
				display: inline-block;
				width: 130px;
				height: 173px;
				background: url('/static/img/startgame.png') no-repeat top center;
				:hover {
					background-position: bottom center;
					animation: 1s ${tadaAnimation};
					~ .hand {
						opacity: 0;
					}
				}
			}
			.hand {
				position: absolute;
				left: -37px;
				top: 34px;
				width: 100px;
				animation: ${handMove} 2s linear infinite;
				transition: 0.3s opacity;
			}
		}
	`,
}

export default Styled;

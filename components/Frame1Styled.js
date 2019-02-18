import styled, { keyframes } from 'styled-components'

import { rollIn, fadeIn, pulse } from 'react-animations'

const rollInAnimation = keyframes`${rollIn}`
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
		.framefooter {
			position: absolute;
			width: 100%;
			height: 142px;
			top: 520px;
			left: 0;
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
		left: 20px;
	`,
	Title: styled.img`
		opacity: 1;
		animation: 0.5s ${BlurEffect} ease-out;
		position: absolute;
		top: 161px;
    left: 219.7px;
	`,
};

export default Styled;

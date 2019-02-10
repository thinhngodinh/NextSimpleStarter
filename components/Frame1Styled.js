import styled, { keyframes } from 'styled-components'

const BlurEffect = keyframes`
	0% {
		filter: blur(20px);
		opacity: 0;
		transform: scale(1.5);
	}
	100% {
		filter: blur(0);
		opacity: 1;
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
	`,
	Logo: styled.img`
		position: absolute;
		top: 20px;
		left: 20px;
	`,
	PlayButton: styled.a`
		position: absolute;
		right: 100px;
		top: 58%;
		animation: 0.5s ${BlurEffect} ease-out;
		transition: border-color 0.3s;

		.hidden {
			display: none
		}

		:hover {
			::before {
				border-color: #7c7c7c;
			}
		}
		::before {
			content: '';
			display: block;
			width: 53px;
			height: 53px;
			border: 2px dashed #f4f4f4;
			border-radius: 60px;
			position: absolute;
			top: -3px;
			left: -3px;
			animation: ${RotateEffect} 10s linear infinite;
		}
	`,
	Title: styled.img`
		animation: 0.5s ${BlurEffect} ease-out;
		position: absolute;
		top: 298px;
		right: 94px;
	`,
	VideoPlayer: styled.div`
		position: absolute;
		display: flex;
		width: 100%;
    height: 100%;
    justify-content: center;
		align-items: center;
		.closeButton {
			display: block;
			background: url('/static/img/closebtn.png') no-repeat top center;
			position: absolute;
			top: -12px;
			right: -12px;
			width: 32px;
			height: 32px;
			border-radius: 32px;
			:hover {
				background-position: bottom center;
			}
		}

		.front_cover {
			position: absolute;
			width: 100%;
			height: 100%;
			top: 0; left: 0;
		}

		.backdrop {
			background: #00000050;
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0;
			left: 0;
			cursor: pointer;
			~ div {
				z-index: 1;
				position: relative;
				background: #000000;
				box-shadow: 0px 0px 300px 100px rgba(0,0,0,0.5);
			}
		}
	`
};

export default Styled;

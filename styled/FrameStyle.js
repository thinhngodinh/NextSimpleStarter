import styled, {keyframes} from 'styled-components'

import { pulse, fadeOutLeft, fadeOutRight } from 'react-animations'
const pulseAnimation = keyframes`${pulse}`
const fadeOutAnimation = keyframes`${fadeOutLeft}`
const fadeOutRightAnimation = keyframes`${fadeOutRight}`
const blurEffectInAnimation = keyframes`
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

const blurEffectOutAnimation = keyframes`
	0% {
		opacity: 1;
		filter: blur(20px);
		transform: scale(1);
	}
	100% {
		opacity: 0;
		filter: blur(20);
		transform: scale(2);
	}
`;

export const StyledFrame = styled.div`
	display: flex;
	justify-content: center;
	position: relative;
`;

export const NextPageButton = styled.a`
	padding: 10px;
	border: none;
	background: transparent;
	position: absolute;
	bottom: 10px;
	left: 50%;
	transform: translate(-50%, 0);
`

export const StyledFrame1 = styled(StyledFrame)`
	align-items: flex-start;
	background: url(/static/img/homeBg_hi_res_.jpg) no-repeat center top;
	background-size: cover;
`;

export const StyledFrame2 = styled(StyledFrame)`
	background: url(/static/img/frame2bg.jpg) no-repeat center top;
	background-size: cover;
	.qr-scan{
		position: absolute;
    right: 0;
    top: 50%;
		transform: translate(0, -50%);
		z-index: 1;
	}
`;

export const StyledFrame3 = styled(StyledFrame)`
	min-height: 720px;
	> div {
		width: 960px;
		display: flex;
    flex-direction: column;
	}
	.stageBackgroud {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
		background-size: cover;
		&.hide {
			animation: 1s ${blurEffectOutAnimation};
		}
		&.show {
			animation: 0.5s ${blurEffectInAnimation}
		}
	}
	.stage {
		height: 570px;
		.content-img {
			width: 29%;
			margin-left: 100px;
			margin-top: 50px;
			&.hide {
				animation: 0.5s ${fadeOutAnimation};
			}
			&.show {
				animation: 1.5s ${blurEffectInAnimation};
			}
		}
	}
	.navigation {
		display: flex;
		justify-content: center;
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
		ul {
			list-style: none;
			margin: 0;
			padding: 0;
			display: flex;
			justify-content: center;
			li {
				display: inline-block;
				margin: 5px;
			}
		}
		.btn-pager {
			display: inline-block;
			width: 97px;
			height: 95px;
			:hover {
				background-position: bottom left;
				animation: 0.4s ${pulseAnimation};
			}
		}
	}
`;

export const StyledFrame4 = styled(StyledFrame)`
	min-height: 720px;
	background: url(/static/img/frame4_bg.jpg) no-repeat center top;
	background-size: cover;
`;

export const StyledFrame5 = styled(StyledFrame)`
	min-height: 726px;
	background: url(/static/img/frame5_bg.jpg) no-repeat center top;
	background-size: cover;
`;

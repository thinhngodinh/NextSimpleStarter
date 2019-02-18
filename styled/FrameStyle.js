import styled from 'styled-components'

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
	background: url(/static/img/frame3_thienlong.jpg) no-repeat center top;
	background-size: cover;
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

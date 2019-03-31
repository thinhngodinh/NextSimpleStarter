import styled, {keyframes} from 'styled-components'

import { pulse, fadeOutLeft, flipInY } from 'react-animations'
const pulseAnimation = keyframes`${pulse}`
const fadeOutAnimation = keyframes`${fadeOutLeft}`
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

export const StyledSubPageLayout = styled.div`
	@media (max-width: 480px) {
		.page-banner {
			img {
				width: 100%;
				height: 100%;
			}
		}
		.page-content {
			padding: 15px;
			width: calc(100% - 30px) !important;
			background: #fff;
			min-height: auto !important;
			img {
				max-width: 95vw !important;
				height: auto;
			}
			.article-title {
				margin-top: 0 !important;
				display: block !important;
				.button-back {
					margin-bottom: 15px;
					min-width: 90px;
				}
			}
		}
	}
	.page-banner {
		display: flex;
    justify-content: center;
    overflow: hidden;
	}

	.page-content {
		width: 860px;
		margin: 0 auto;
		min-height: calc(100vh + 300px);
		font-size: 1.5rem;
		.article-post-date {
			text-align: right;
			font-style: italic;
			opacity: 0.6;
		}
		.article-title {
			display: flex;
			margin-top: 30px;
			align-items: flex-start;
			h1 {
				color: #b81f1e;
				margin: 0; padding: 0;
				text-align: center;
				flex-grow: 1;
			}
		}
	}
`;

export const StyledQr = styled.div`
	@media (max-width: 480px) {
		.qr-scan {
			display: none;
		}
	}
	.qr-scan{
		position: fixed;
    right: 0;
    top: 50%;
		transform: translate(0, -50%);
		z-index: 1;
		.footer,
		.download {
			position: absolute;
			display: block;
		}
		.footer {
			width: 34px;
			height: 34px;
			top: 500px;
			&.home{ right: 111px; }
			&.youtube { right: 28px; }
			&.fb { right: 68px; }
		}
		.download {
			width: 125px;
			height: 30px;
			right: 26px;
			&.playstore { top: 240px; }
			&.applestore { top: 201px; }
			&.pc { top: 280px; }
			&.apk { top: 320px; }
			&.topup { top: 462px; }
		}
	}
`;

export const StyledFrame = styled.div`
	display: flex;
	justify-content: center;
	position: relative;
	@media (max-width: 480px) {
		.frame-title {
			text-align: center;
			margin-top: 15px;
			>img {
				width: 400px;
			}
		}
	}

	@media (min-width: 481px) {
		.frame-title {
			text-align: center;
			margin-top: 25px;
			>img {
				width: 300px;
			}
		}
	}

`;

export const NextPageButton = styled.a`
	padding: 10px;
	border: none;
	background: transparent;
	position: absolute;
	bottom: 10px;
	left: 50%;
	transform: translate(-50%, 0);
	@media (max-width: 480px) {
		display: none;
	}
`

export const StyledFrame1 = styled(StyledFrame)`
	align-items: flex-start;
	background: url(/static/img/f1_desktop_bg.jpg) no-repeat center top;
	background-size: cover;
	@media (max-width: 480px) {
		background: url(/static/img/f1_mobile_bg.jpg) no-repeat center top;
		order: 1;
  }
`;

export const StyledFrame2 = styled(StyledFrame)`
	background: url(/static/img/frame2bg.jpg) no-repeat center top;
	background-size: cover;
`;

export const StyledFrame3 = styled(StyledFrame)`
	overflow: hidden;
	> div {
		width: 960px;
		display: flex;
    flex-direction: column;
	}
	@media (min-width: 481px) {
		min-height: 720px;
		.content-img {
			width: 29%;
			margin-left: 100px;
			margin-top: 15px;
		}
	}
	@media (max-width: 480px) {
		.frame-title {
			img {
				width: 420px;
			}
		}
		min-height: 500px;
		height: 500px;
		.stageBackgroud {
			background-size: 1000px !important;
			background-position: top center;
		}
		.stage .content-img {
			width: 33% !important;
			margin-left: 95px !important;
			margin-top: 15px !important;
		}
		.navigation {
			transform: scale(0.6) translate(0, -50%) !important;
		}
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
		transform: translate(0, -50px) scale(0.8);
		ul {
			list-style: none;
			margin: 0;
			padding: 0;
			display: flex;
			justify-content: center;
			li {
				display: inline-block;
				margin: 5px;
				&.active .btn-pager {
					background-position: bottom left;
				}
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
	@media (max-width: 480px) {
		display: none;
	}
	>div {
		position: relative;
		width: 960px;
	}
	.absolute-link {
		position: absolute;
		width: 50px;
		height: 30px;
		:hover {
			.absolute-image {
				transform: translate(-50%, 0);
				opacity: 1;
			}
		}
		&.lacduong {
			top: 330px;
			right: 580px;
			width: 110px;
			height: 118px;
		}
		&.hoangdia{
			width: 185px;
			height: 133px;
			top: 300px;
			right: 803px;
		}
		&.tochau {
			top: 352px;
			right: 242px;
			width: 143px;
			height: 118px;
		}
		&.hientrang {
			width: 163px;
			height: 133px;
			top: 437px;
			right: 698px;
		}
		&.yenvuong {
			width: 157px;
			height: 137px;
			top: 425px;
			right: 425px;
		}
	}
	.absolute-image {
		width: 300px;
    position: absolute;
    bottom: 31px;
    left: 50%;
		transform: translate(-50%, -10%);
		transition: all .2s ease-in-out;
		opacity: 0;
	}
`;

export const StyledFrame5 = styled(StyledFrame)`
	@media (max-width: 480px) {
		.frame-title {display: none;}
	}
	> div {
		width: 960px;
		position: relative;
		.absolute-container {
			position: absolute;
			width: 413px;
			height: 377px;
			top: 170px;
			right: 158px;
			.slick-arrow {
				top: 29%;
				width: 35px;
				height: 35px;
				&:before {
					display: none;
				}
				&.slick-next {
					right: -35px;
				}
				&.slick-prev {
					left: -35px;
				}
			}
			.slide-row {
				display: flex;
				justify-content: space-between;
				>a {display: inline-block;}
			}
			.slide-row:first-child {
				margin-bottom: 5px;
			}
			.photo-landscape {
				img {
					width: 100%;
				}
			}
			.youtube-link {
				img {
					width: 244px;
					height: 163px;
				}
			}
			.photo-square {
				img {
					height: 163px;
				}
			}
		}
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
	@media (min-width: 481px) {
		min-height: 726px;
		background: url(/static/img/frame5_bg.jpg) no-repeat center top;
		background-size: cover;
		.mobile-msg {
			dislay: none;
		}
	}
	@media (max-width: 480px) {
		background: url(/static/img/f5_mobile.jpg) no-repeat center top;
		background-size: 450px;
		min-height: 600px;
		.absolute-container {
			position: initial !important;
			transform: scale(0.84) translate(0, 50%);
		}
		.mobile-msg {
			align-items: center;
			justify-content: center;
			display: flex;
			font-size: 2rem;
			color: #00000070;
		}
	}
`;

export const StyledFrame6 = styled(StyledFrame)`
	min-height: 900px;
	@media (max-width: 480px) {
		order: 2;
		min-height: 700px !important;
		.react-tabs__tab {
			padding: 10px 13px !important;
		}
		.react-tabs__tab-list {
			padding: 0 !important;
			width: 100vw;
		}


		.news-section {
			display: flex;
			.news-list {
				max-width: 100vw;
				position: relative;
			}
			.guide-box,
			.download-box {
				display: none;
			}
			.carousel-box {
				width: 95vw;
				margin: 40px auto;
			}
		}
	}

	.react-tabs__tab-list {
		padding: 0 20px;
		border-bottom: 1px solid red;
	}
	.react-tabs__tab {
		font-size: 1.5rem;
		bottom: 0;
		padding: 13px 25px;
	}
	.react-tabs__tab--selected {
		border: none;
		background: none;
		color: #c32900;
		position: relative;
		&:before {
			content: ' ';
			width: 8px;
			height: 8px;
			border-top: 2px solid #c32900;
			border-left: 2px solid #c32900;
			display: block;
			position: absolute;
			bottom: 0;
			left: 50%;
			transform: translate(-50%, 0) rotate(45deg);
		}
		&:after {
			content: ' ';
			width: 5px;
			height: 5px;
			border-top: 2px solid #c329009e;
			border-left: 2px solid #c329009e;
			display: block;
			position: absolute;
			bottom: -2px;
			left: 50%;
			transform: translate(-50%,0) rotate(45deg);
		}

	}
	.react-tabs__tab:focus:after,
	.react-tabs__tab:focus {
		background: none;
		border: none;
		box-shadow: none;
		outline: none;
	}

	.article-item {
		margin: 0 15px;
		border-bottom: 1px solid #8d8e95;
		display: flex;
		align-items: center;
		font-size: 1.5rem;
		&:last-child {
			border: none;
		}
		&:hover,
		&:active,
		&:visited {
			.article-public-date,
			.article-title {
				color: red;
			}
		}
		.article-title {
			flex-grow: 2;
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;

			padding: 13px 10px;
			color: #31311f;
		}
		.article-public-date {
			flex-shrink: 1;
			flex-basis: 120px;
			text-align: right;
			color: #00000045;
		}
	}

	.carousel-box {
		white-space: nowrap;
		overflow: hidden;
		.slide-item {
			display: inline-block;
		}
		.slick-dots {
			bottom: 15px !important;
			li.slick-active button:before {
				color: #cc3500;
			}
			li button:before {
				content: '■';
				font-size: 40px;
				transform: rotate(45deg);
				color: #fef399;
				opacity: 1;
			}
		}
		img {
			width: 100%;
		}

	}

	.more-article {
		display: inline-block;
    position: absolute;
    top: 0;
    right: 0;
    font-size: 2rem;
    padding: 7px 15px;
    border: 1px solid #ff00002e;
		color: red;
		transition: all 0.3s;
		&:hover {
			background: #ff0000;
			color: white;
		}
	}

	@media (min-width: 481px) {
		> div {
			width: 960px;
		}
		.frame-title {
			margin-bottom: 40px;
		}
		.news-content-section {
			margin-bottom: 40px;
		}
		.news-section {
			display: flex;
			.news-list {
				background: #fdf9ed;
				flex-grow: 2;
				overflow: hidden;
				position: relative;
			}
			.download-box {
				width: 280px;
				z-index: 1;
				position: relative;

				.download {
					display: block;
					position: absolute;
					width: 64px;
					height: 71px;
					bottom: 18px;
					&.applestore { left: 70px; }
					&.playstore { left: 0; }
					&.pc { left: 140px; }
					&.apk { left: 210px; }
					&.zing_id {
						width: 100%;
						top: 180px;
						height: 83px;
					}
					&.topup {
						width: 100%;
						left: 0;
						top: 20px;
						height: 155px;
					}
				}
				img {
					width: 320px;
					transform: translate(-18px, -16px);
				}
			}
			.guide-box {
				width: 280px;
				position: relative;
				> img {
					position: absolute;
					top: 0; left: 0;
					z-index: -1;
				}
				.guide-link {
					display: block;
					width: 249px;
					height: 76px;
				}
			}
			.carousel-box {
				width: calc(960px - 280px);
			}
		}
	}
`;

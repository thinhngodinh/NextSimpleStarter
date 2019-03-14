import styled, {keyframes} from 'styled-components'

export const StyledPostList = styled.div`
	@media (max-width: 480px) {
		.navigation {
			margin-top: 15px !important;
			margin-bottom: 30px !important;
			ul {
				li {
					margin-right: 0 !important;
					.categoryItem {
						padding-left: 15px;
						padding-right: 15px;
					}
				}
			}
		}
		.post-list {
			article {
				flex-direction: column;
				border: 1px solid #e2e2e2;
				.article-teaser {
					padding: 20px 10px !important;
					> h3 {
						margin-top: 0;
					}
				}
			}
			.article-img {
				> img[src] {
					border-left: none !important;
					border-right: none !important;
					border-top: none !important;
				}
			}
			.article-actions {
				display: none;
			}
		}
	}
	.navigation {
		margin-top: 45px;
		margin-bottom: 60px;
		ul {
			list-style: none;
			margin: 0; padding: 0;
			display: flex;
			align-items: center;
			justify-content: center;
			li{
				margin-right: 10px
			}
			.button-back:hover,
			.active .button-back {
				color: white;
				background: #b71e1d;
			}
			.button-back{
				padding-left: 25px;
				padding-right: 25px;
				color: #000000;
				background: none;
			}
		}
	}
	.post-list {
		box-sizing: border-box;
		article {
			display: flex;
			margin-bottom: 20px;
			&:hover {
				cursor: pointer;
				.article-teaser {
					color: #b71e1d;
				}
				.article-actions {
					.btn-more {
						color: white;
						background: #b71e1d;
						&:before {
							border-color: #ffffff87;
						}
					}
				}
			}
			.article-img {
				flex: 2;
				padding: 5px;
				display: flex;
				>img[src] {
					width: 100%;
					height: 100%;
					justify-content: center;
					align-items: center;
					border: 1px solid #e2e2e2;
				}
			}

			.article-teaser {
				flex: 7;
				padding: 0 10px;
				> h3 {
					margin-bottom: 0;
				}
			}
			.article-actions {
				flex: 2;
				text-align: center;
				.btn-more {
					padding-left: 20px;
					padding-right: 20px;
					margin-top: 20px;
					background: none;
					color: #b71e1d;
					&:before {
						border-color: #b71e1d;
					}
				}
			}
		}
	}
	/*** pager container style ***/
	.pager .Pager {
		display: flex;
		justify-content: center;
		margin: 25px 0 40px 0;
		* {
			box-sizing: border-box
		}
		.PagerButton {
			padding: 15px 17px;
			border: 1px solid #ffcaca00;
			transition: all 0,3s;

			&--Prev {
			}
			&--Next {
			}
			&--Go {
			}
			&--Rest {
			}
			&--GoFirst {
			}
			&--GoLast {
			}
			&:hover,
			&.is-active {
				color: red;
				border: 1px solid #ffcaca;
				font-weight: 700;
			}

			&.is-disabled {
				opacity: 0.2;
			}
		}
	}
`

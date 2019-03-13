import styled, {keyframes} from 'styled-components'

export const StyledPostList = styled.div`
	.navigation {
		margin-top: 15px;
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
		article {
			display: flex;
			.article-img {
				flex: 3;
			}
			.article-teaser {
				flex: 7;
			}
			.article-actions {
				flex: 2;
				text-align: center;
			}
		}
	}
`

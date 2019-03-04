import styled, { createGlobalStyle, keyframes } from 'styled-components'

const StyledMobileHeader = styled.div`
	@media (max-width: 480px) {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 1;
		> img {
			width: 100%;
		}
		> a {
			display: block;
			position: absolute;
			width: 8%;
			height: 41%;
			top: 12%;
			&.footer {
				&.home {
					right: 19%;
				}
				&.fb {
					right: 10%;
				}
				&.youtube {
					display: none;
				}
			}
			&.download {
				left: 18%;
				width: 24%;
				&.topup {
					left: 42%;
				}
			}
		}
	}
	@media (min-width: 481px) {
		display: none;
	}
`
export default StyledMobileHeader

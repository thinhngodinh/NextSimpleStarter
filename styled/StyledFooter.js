import styled, { createGlobalStyle, keyframes } from 'styled-components'

const StyledFooter = styled.div`
	background: #00000020;
	display: flex;
	justify-content: center;
	>div {
		display: flex;
		width: 906px;
	}
	.logo {
		flex: 1;
		img {
			width: 120px;
		}
	}
	.footer-info {
		flex: 3;
		align-items: center;
    justify-content: flex-start;
    display: flex;
	}
`
export default StyledFooter

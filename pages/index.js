// import 'isomorphic-fetch'
import React from 'react'
import dynamic from 'next/dynamic'
import { connect } from 'react-redux'

import styled, { createGlobalStyle, keyframes } from 'styled-components'
import { fadeIn, bounceInDown } from 'react-animations'

const Frame1 = dynamic(() => import('../components/Frame1'), {loading: () => <p>loading...</p>})
// const Frame2 = dynamic(() => import('../components/Frame2'), {loading: () => <p>loading...</p>})
const Frame3 = dynamic(() => import('../components/Frame3'), {loading: () => <p>loading...</p>})
const Frame4 = dynamic(() => import('../components/Frame4'), {loading: () => <p>loading...</p>})
// const Frame5 = dynamic(() => import('../components/Frame5'), {loading: () => <p>loading...</p>})
// const Frame6 = dynamic(() => import('../components/Frame6'), {loading: () => <p>loading...</p>})
const RegisterForm = dynamic(() => import('../components/RegisterForm.js'), {loading: () => <p>loading...</p>})

import appActions from '../actions/appActions'

const GlobalStyle = createGlobalStyle`
	html {
		background: '#EEE';
		color: '#444';
		font-size: 10px;
		font-family: 'arial'
	}
  body {
    margin: 0
	}
	.hidden {
		display: none
	}
	a {
		text-decoration: none;
	}
	input,
	label,
	button,
	textarea
	{
		margin:0;
		border:0;
		padding:0;
		display:inline-block;
		vertical-align:middle;
		white-space:normal;
		background:none;
		line-height:1;

		/* Browsers have different default form fonts */
		font-size:13px;
		font-family:Arial;
	}
	input:focus
	{
		outline:0;
	}
`

const StyledFrame = styled.div`
	display: flex;
	justify-content: center;
	position: relative;
`;

const NextPageButton = styled.a`
	padding: 10px;
	border: none;
	background: transparent;
	position: absolute;
	bottom: 10px;
	left: 50%;
	transform: translate(-50%, 0);
`

const StyledFrame1 = styled(StyledFrame)`
	align-items: flex-start;
	background: url(/static/img/homeBg_hi_res_.jpg) no-repeat center top;
	background-size: cover;
`;

const StyledFrame2 = styled(StyledFrame)`
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

const StyledFrame3 = styled(StyledFrame)`
	min-height: 720px;
	background: url(/static/img/frame3_thienlong.jpg) no-repeat center top;
	background-size: cover;
`;

const StyledFrame4 = styled(StyledFrame)`
	min-height: 720px;
	background: url(/static/img/frame4_bg.jpg) no-repeat center top;
	background-size: cover;
`;

const StyledFrame5 = styled(StyledFrame)`
	min-height: 726px;
	background: url(/static/img/frame5_bg.jpg) no-repeat center top;
	background-size: cover;
`;

const fadeInAnimation = keyframes`${fadeIn}`

const StyleRegisterBox = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	background: #00000050;
	top: 0; left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	.backdrop {
		background: #00000080;
		cursor: pointer;
		position: absolute;
		width: 100%;
		height: 100%;
		animation: 0.5s ${fadeInAnimation};
	}
	.modal-container {
		background: url('/static/img/modalbg.jpg') no-repeat center center;
		width: 350px;
		height: 357px;
		z-index: 1;
		position: relative;
		justify-content: center;
		align-items: center;
		display: flex;
		animation: 1s ${bounceInDown};
		.modal-content {
			padding-top: 82px;
			width: 100%;
			height: 71%;
			padding-right: 20px;
			padding-left: 20px;
			padding-bottom: 20px;
			display: flex;
			justify-content: center;
			.button-ok {
				display: inline-block;
				width: 150px;
				height: 43px;
				background: url('/static/img/btn-ok.png') no-repeat center center;
			}
			.registerForm {
				width: 100%;
				padding: 0 35px;
				text-align: center;
			}
			form {
				.formfield {
					margin-bottom: 15px;
					label, input {
						display: block;
						margin-bottom: 5px;
						width: 100%;
						text-align: center;
					}
					label{ color: #9d1001;}
					input {
						padding: 10px 0;
						background: #00000020;
					}
				}
			}
		}
		.closebtn {
			display: block;
			background: url(/static/img/closebtn.png) no-repeat top center;
			position: absolute;
			top: -18px;
			right: -18px;
			width: 32px;
			height: 32px;
			border-radius: 32px;
			:hover {
				background-position: bottom center;
			}
		}
	}
`

class Index extends React.Component {
	static async getInitialProps({ store, isServer }) {
		// dispatch action to saga for initial data
		if(!isServer) {
			return {isServer, stars: 21}
		}
		return { isServer, stars: 20 }
	}

	constructor (props) {
		super(props)
		this.handleNextFrame = this.handleNextFrame.bind(this)
		this.state = {
			registerBox: false
		}
		this.toggleModal = this.toggleModal.bind(this)
	}

	handleNextFrame (e) {
		const {props} = this;
		console.log('handle next frame function invoke')
	}

	toggleModal (e) {
		this.setState({
			registerBox: !this.state.registerBox
		})
	}

	render() {
		const { stars, appState } = this.props
		const { registerBox } = this.state
		return (
			<React.Fragment>
				<StyledFrame1>
					<Frame1 toggleModal={this.toggleModal} />
					<NextPageButton href='javascript:;' onClick={this.handleNextFrame}>
						<img src='/static/img/next_frame_button.png' />
					</NextPageButton>
				</StyledFrame1>

				{/* <StyledFrame2>
					<Frame2 />
					<NextPageButton href='javascript:;' onClick={this.handleNextFrame}>
						<img src='/static/img/next_frame_button.png' />
					</NextPageButton>
				</StyledFrame2> */}

				<StyledFrame3>
					<Frame3 />
					<NextPageButton href='javascript:;' onClick={this.handleNextFrame}>
						<img src='/static/img/next_frame_button.png' />
					</NextPageButton>
				</StyledFrame3>

				<StyledFrame4>
					<Frame4 />
					<NextPageButton href='javascript:;' onClick={this.handleNextFrame}>
						<img src='/static/img/next_frame_button.png' />
					</NextPageButton>
				</StyledFrame4>

				{/* <StyledFrame5>
					<Frame5 />
					<NextPageButton href='javascript:;' onClick={this.handleNextFrame}>
						<img src='/static/img/next_frame_button.png' />
					</NextPageButton>
				</StyledFrame5>

				<StyledFrame>
					<Frame6 />
				</StyledFrame> */}
				{registerBox &&
					<StyleRegisterBox>
						<div className='backdrop' onClick={this.toggleModal}></div>
						<div className='modal-container'>
							<a href='javascript:;' className='closebtn' onClick={this.toggleModal}></a>
							<div className='modal-content'>
								<RegisterForm />
							</div>
						</div>
					</StyleRegisterBox>
				}
				<GlobalStyle />
			</React.Fragment>
		)
	}
}

const mapStateToProps = state => ({
	appState: state.appState
})

export default connect(mapStateToProps)(Index)

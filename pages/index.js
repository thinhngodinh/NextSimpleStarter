// import 'isomorphic-fetch'
import React from 'react'
import dynamic from 'next/dynamic'
import { connect } from 'react-redux'

import styled, { createGlobalStyle } from 'styled-components'

const Frame1 = dynamic(() => import('../components/Frame1'), {loading: () => <p>loading...</p>})
const Frame2 = dynamic(() => import('../components/Frame2'), {loading: () => <p>loading...</p>})
const Frame3 = dynamic(() => import('../components/Frame3'), {loading: () => <p>loading...</p>})
const Frame4 = dynamic(() => import('../components/Frame4'), {loading: () => <p>loading...</p>})
const Frame5 = dynamic(() => import('../components/Frame5'), {loading: () => <p>loading...</p>})
const Frame6 = dynamic(() => import('../components/Frame6'), {loading: () => <p>loading...</p>})

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
	}

	handleNextFrame (e) {
		const {props} = this;
		console.log('handle next frame function invoke')
	}

	render() {
		const { stars, appState } = this.props
		return (
			<React.Fragment>
				<StyledFrame1>
					<Frame1 />
					<NextPageButton href='javascript:;' onClick={this.handleNextFrame}>
						<img src='/static/img/next_frame_button.png' />
					</NextPageButton>
				</StyledFrame1>

				<StyledFrame2>
					<Frame2 />
					<NextPageButton href='javascript:;' onClick={this.handleNextFrame}>
						<img src='/static/img/next_frame_button.png' />
					</NextPageButton>
				</StyledFrame2>

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

				<StyledFrame5>
					<Frame5 />
					<NextPageButton href='javascript:;' onClick={this.handleNextFrame}>
						<img src='/static/img/next_frame_button.png' />
					</NextPageButton>
				</StyledFrame5>

				<StyledFrame>
					<Frame6 />
				</StyledFrame>
				<GlobalStyle />
			</React.Fragment>
		)
	}
}

const mapStateToProps = state => ({
	appState: state.appState
})

export default connect(mapStateToProps)(Index)

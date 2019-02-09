import 'isomorphic-fetch'
import React from 'react'
import { connect } from 'react-redux'

import styled from 'styled-components'

import Frame1 from '../components/Frame1'
import Frame2 from '../components/Frame2'
import Frame3 from '../components/Frame3'
import Frame4 from '../components/Frame4'
import Frame5 from '../components/Frame5'
import Frame6 from '../components/Frame6'
import appActions from '../actions/appActions'

const StyledFrame = styled.div`
	min-height: 50vh;
	display: flex;
	justify-content: center;
	background: ${props => props.background};
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

class Index extends React.Component {
	static async getInitialProps({ store, isServer }) {
		// dispatch action to saga for initial data
		if(!isServer) {
			return {isServer, stars: 21}
		}
		const res = await fetch('https://jsonplaceholder.typicode.com/users')
		const data = await res.json()
		console.log('>>>>> application FETCHED API');
		store.dispatch(appActions.setAppInitData.invoke([...data]))
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
		console.log('COMPONENT DATA', appState.init);
		return (
			<React.Fragment>
				<StyledFrame1>
					<Frame1 />
					<NextPageButton href='javascript:;' onClick={this.handleNextFrame}>
						<img src='/static/img/next_frame_button.png' />
					</NextPageButton>
				</StyledFrame1>

				<StyledFrame background='#ccc'>
					<Frame2 />
					<NextPageButton href='javascript:;' onClick={this.handleNextFrame}>
						<img src='/static/img/next_frame_button.png' />
					</NextPageButton>
				</StyledFrame>

				<StyledFrame background='#bcbcbc'>
					<Frame3 />
					<NextPageButton href='javascript:;' onClick={this.handleNextFrame}>
						<img src='/static/img/next_frame_button.png' />
					</NextPageButton>
				</StyledFrame>

				<StyledFrame background='#a5a5a5'>
					<Frame4 />
					<NextPageButton href='javascript:;' onClick={this.handleNextFrame}>
						<img src='/static/img/next_frame_button.png' />
					</NextPageButton>
				</StyledFrame>

				<StyledFrame background='#d7dde5'>
					<Frame5 />
					<NextPageButton href='javascript:;' onClick={this.handleNextFrame}>
						<img src='/static/img/next_frame_button.png' />
					</NextPageButton>
				</StyledFrame>

				<StyledFrame background='#e3eefc'>
					<Frame6 />
				</StyledFrame>
			</React.Fragment>
		)
	}
}

const mapStateToProps = state => ({
	appState: state.appState
})

export default connect(mapStateToProps)(Index)

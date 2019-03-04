import 'isomorphic-fetch'
import React from 'react'
import dynamic from 'next/dynamic'
import { connect } from 'react-redux'
import HttpService from '../utils/HttpService'
import ApiService from '../utils/ApiService'

import StyleRegisterBox from '../styled/StyledModal'
import { NextPageButton, StyledFrame1, StyledFrame3, StyledFrame4, StyledFrame5, StyledFrame6 } from '../styled/FrameStyle'

import Footer from '../components/Footer'
import MobileHeader from '../components/MobileHeader'

const Frame1 = dynamic(() => import('../components/Frame1'), {loading: () => <p>loading Frame 1...</p>})
const Frame3 = dynamic(() => import('../components/Frame3'), {loading: () => <p>loading Frame 3...</p>})
const Frame4 = dynamic(() => import('../components/Frame4'), {loading: () => <p>loading Frame 4...</p>})
const Frame5 = dynamic(() => import('../components/Frame5'), {loading: () => <p>loading Frame 5...</p>})
const Frame6 = dynamic(() => import('../components/Frame6'), {loading: () => <p>loading Frame 6...</p>})
const RegisterForm = dynamic(() => import('../components/RegisterForm.js'), {loading: () => <p>loading...</p>})

import appActions from '../actions/appActions'

class Index extends React.Component {
	static async getInitialProps({ store, isServer, req, pathname, query }) {
		// dispatch action to saga for initial data
		if(isServer) {
			const httpService = new HttpService()
			const apiService = new ApiService(httpService)
			try {
				const totalUsersData = await apiService.getTotalUser(isServer)
				store.dispatch(appActions.setTotalUsers.invoke(totalUsersData.data))
			} catch (e) {
				store.dispatch(appActions.setTotalUsers.invoke(0))
			}
			try {
				const frame3Cfg = await apiService.getFrame3Config(isServer)
				store.dispatch(appActions.setFrame3Cfg.invoke(frame3Cfg))
			} catch (e) {
				console.error(e)
			}

			try {
				const stickyCfg = await apiService.getTickyBarConfig(isServer)
				store.dispatch(appActions.setTickyBarCfg.invoke(stickyCfg))
			} catch (e) {
				console.error(e)
			}
		}
		return { isServer, headers: req.headers, query }

	}

	constructor (props) {
		super(props)
		this.handleNextFrame = this.handleNextFrame.bind(this)
		this.state = {
			registerBox: false,
		}
		this.toggleModal = this.toggleModal.bind(this)
	}

	handleNextFrame (e) {
		const frameEl = e.currentTarget.parentElement
		window.scroll({
			top: frameEl.offsetHeight + frameEl.offsetTop,
			left: 0,
			behavior: 'smooth'
		});
	}

	toggleModal (e) {
		this.setState({
			registerBox: !this.state.registerBox
		})
	}

	render() {
		const { totalUsers, appState } = this.props
		const { registerBox } = this.state
		return (
			<React.Fragment>
				<MobileHeader stickyCfg={appState.stickyCfg} />
				<StyledFrame1>
					{Frame1 && <Frame1
												stickyCfg={appState.stickyCfg}
												totalUsers={totalUsers}
												toggleModal={this.toggleModal} />}
					<NextPageButton href='javascript:;' onClick={this.handleNextFrame}>
						<img src='/static/img/next_frame_button.png' />
					</NextPageButton>
				</StyledFrame1>

				<StyledFrame3>
					{Frame3 && <Frame3 config={appState.frame3Cfg} />}
					<NextPageButton href='javascript:;' onClick={this.handleNextFrame}>
						<img src='/static/img/next_frame_button.png' />
					</NextPageButton>
				</StyledFrame3>

				<StyledFrame4>
					{Frame4 && <Frame4 />}
					<NextPageButton href='javascript:;' onClick={this.handleNextFrame}>
						<img src='/static/img/next_frame_button.png' />
					</NextPageButton>
				</StyledFrame4>

				<StyledFrame5>
					{Frame5 && <Frame5 />}
					<NextPageButton href='javascript:;' onClick={this.handleNextFrame}>
						<img src='/static/img/next_frame_button.png' />
					</NextPageButton>
				</StyledFrame5>

				{/* <StyledFrame6>
					{Frame6 && <Frame6 />}
				</StyledFrame6> */}

				<Footer />
				{registerBox &&
					<StyleRegisterBox>
						<div className='backdrop'></div>
						<RegisterForm toggleModal={this.toggleModal} />
					</StyleRegisterBox>
				}
			</React.Fragment>
		)
	}
}

const mapStateToProps = state => ({
	appState: state.appState,
	totalUsers: state.user.totalUsers
})

export default connect(mapStateToProps)(Index)

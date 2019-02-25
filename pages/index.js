import 'isomorphic-fetch'
import React from 'react'
import dynamic from 'next/dynamic'
import { connect } from 'react-redux'
import HttpService from '../utils/HttpService'
import ApiService from '../utils/ApiService'

import StyleRegisterBox from '../styled/StyledModal'
import GlobalStyle from '../styled/GlobalStyle'
import { NextPageButton, StyledFrame1, StyledFrame3, StyledFrame4 } from '../styled/FrameStyle'

import Footer from '../components/Footer'

const Frame1 = dynamic(() => import('../components/Frame1'), {loading: () => <p>loading...</p>})
const Frame3 = dynamic(() => import('../components/Frame3'), {loading: () => <p>loading...</p>})
const Frame4 = dynamic(() => import('../components/Frame4'), {loading: () => <p>loading...</p>})
const RegisterForm = dynamic(() => import('../components/RegisterForm.js'), {loading: () => <p>loading...</p>})

import appActions from '../actions/appActions'

class Index extends React.Component {
	static async getInitialProps({ store, isServer }) {
		// dispatch action to saga for initial data
		if(isServer) {
			const httpService = new HttpService()
			const apiService = new ApiService(httpService)

			const totalUsersData = await apiService.getTotalUser()
			store.dispatch(appActions.setTotalUsers.invoke(totalUsersData.data))

			const frame3Cfg = await apiService.getFrame3Config()
			store.dispatch(appActions.setFrame3Cfg.invoke(frame3Cfg))

			const stickyCfg = await apiService.getTickyBarConfig()
			store.dispatch(appActions.setTickyBarCfg.invoke(stickyCfg))
			return { isServer }
		}

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
				</StyledFrame4>
				<Footer />
				{registerBox &&
					<StyleRegisterBox>
						<div className='backdrop'></div>
						<RegisterForm toggleModal={this.toggleModal} />
					</StyleRegisterBox>
				}
				<GlobalStyle />
			</React.Fragment>
		)
	}
}

const mapStateToProps = state => ({
	appState: state.appState,
	totalUsers: state.user.totalUsers
})

export default connect(mapStateToProps)(Index)

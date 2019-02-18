import 'isomorphic-fetch'
import React from 'react'
import dynamic from 'next/dynamic'
import { connect } from 'react-redux'
import HttpService from '../utils/HttpService'
import ApiService from '../utils/ApiService'

import StyleRegisterBox from '../styled/StyledModal'
import GlobalStyle from '../styled/GlobalStyle'
import { NextPageButton, StyledFrame1, StyledFrame3, StyledFrame4 } from '../styled/FrameStyle'

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
			return { isServer }
		}

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
		const { totalUsers } = this.props
		const { registerBox } = this.state
		return (
			<React.Fragment>
				<StyledFrame1>
					{Frame1 && <Frame1 totalUsers={totalUsers} toggleModal={this.toggleModal} />}
					<NextPageButton href='javascript:;' onClick={this.handleNextFrame}>
						<img src='/static/img/next_frame_button.png' />
					</NextPageButton>
				</StyledFrame1>

				<StyledFrame3>
					{Frame3 && <Frame3 />}
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

				{registerBox &&
					<StyleRegisterBox>
						<div className='backdrop'></div>
						<div className='modal-container'>
							<a href='javascript:;' className='closebtn' onClick={this.toggleModal}></a>
							<img src='/static/img/modal_title_register.png' className='modal-title' />
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
	appState: state.appState,
	totalUsers: state.user.totalUsers
})

export default connect(mapStateToProps)(Index)

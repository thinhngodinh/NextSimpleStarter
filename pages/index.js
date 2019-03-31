import React from 'react'
import dynamic from 'next/dynamic'
import { connect } from 'react-redux'
import Head from 'next/head'
import NoSSR from 'react-no-ssr'
import HttpService from '../utils/HttpService'
import ApiService from '../utils/ApiService'

import { NextPageButton, StyledFrame1, StyledFrame3, StyledFrame4, StyledFrame5, StyledFrame6 } from '../styled/FrameStyle'

import Footer from '../components/Footer'
import MobileHeader from '../components/MobileHeader'
import FloatingDownload from '../components/FloatingDownload'
import NewsList from '../components/NewsList'

const Frame1 = dynamic(() => import('../components/Frame1'), {loading: () => <p>loading...</p>})
const Frame3 = dynamic(() => import('../components/Frame3'), {loading: () => <p>loading...</p>})
const Frame4 = dynamic(() => import('../components/Frame4'), {loading: () => <p>loading...</p>})
const Frame5 = dynamic(() => import('../components/Frame5'), {loading: () => <p>loading...</p>})
const Frame6 = dynamic(() => import('../components/Frame6'), {loading: () => <p>loading...</p>})

import appActions from '../actions/appActions'

class Index extends React.Component {
	static async getInitialProps({ store, isServer, req, pathname, asPath, query }) {
		// dispatch action to saga for initial data
		const httpService = new HttpService()
		const apiService = new ApiService(httpService)
		console.log(new Date().toISOString(), '>>>>>>>>>>>>FE - PAGE REQUEST>>>>>>>>>>>>', asPath)
		if(!store.getState().appState.isHomePageInit) {
			try {
				const [
					posts,
					frame3Cfg,
					frame5Cfg,
					stickyCfg,
					slides
				] = await Promise.all([
					apiService.getPostList(isServer, {_start: 0, _limit: 6}),
					apiService.getFrame3Config(isServer),
					apiService.getFrame5Config(isServer),
					apiService.getTickyBarConfig(isServer),
					apiService.getFrame6Sliders(isServer)
				])
				store.dispatch(appActions.setPostList.invoke(posts))
				store.dispatch(appActions.setFrame3Cfg.invoke(frame3Cfg))
				store.dispatch(appActions.setFrame5Cfg.invoke(frame5Cfg))
				store.dispatch(appActions.setTickyBarCfg.invoke(stickyCfg))
				store.dispatch(appActions.setFrame6Sliders.invoke(slides))

				store.dispatch(appActions.setHomepageInitialed.invoke())
			}
			catch (e) {
				console.error(new Date().toISOString(), e)
			}
		}
		return { isServer, query, pageShadow: true, asPath }

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
		const { appState } = this.props
		return (
			<React.Fragment>
				<Head>
					<title>Tân Thiên Long Mobile - Trang Chủ VNG</title>
					<meta property="og:image" content="http://ttlm.zing.vn/static/img/mobile_subpage_header.jpg" />
					<meta property="og:title" content="Tân Thiên Long Mobile - VNG - Tuyệt tác kiếm hiệp Kim Dung" />
					<meta property="og:description" content="Tái hiện thế giới kiếm hiệp đan xen tình duyên một cách chân thật nhất" />
					<meta property="og:url" content="http://ttlm.zing.vn" />
				</Head>
				<NoSSR>
					<MobileHeader stickyCfg={appState.stickyCfg} />
				</NoSSR>
				<FloatingDownload stickyCfg={appState.stickyCfg} />
				<StyledFrame1>
					{Frame1 && <Frame1
												toggleModal={this.toggleModal} />}
					<NextPageButton href='javascript:;' onClick={this.handleNextFrame}>
						<img src='/static/img/next_frame_button.png' />
					</NextPageButton>
				</StyledFrame1>

				<StyledFrame6>
					{Frame6 && <Frame6
						slides={appState.slides}
						stickyCfg={appState.stickyCfg}>
						{appState.posts && <NewsList postList={appState.posts} /> }
					</Frame6>}
					<NextPageButton href='javascript:;' onClick={this.handleNextFrame}>
						<img src='/static/img/next_frame_button.png' />
					</NextPageButton>
				</StyledFrame6>

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
					{Frame5 && <Frame5 config={appState.frame5Cfg} />}
				</StyledFrame5>

				<Footer />
			</React.Fragment>
		)
	}
}

const mapStateToProps = state => ({
	appState: state.appState,
	totalUsers: state.user.totalUsers
})

export default connect(mapStateToProps)(Index)

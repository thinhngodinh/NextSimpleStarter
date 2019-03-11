import React from 'react'
import dynamic from 'next/dynamic'
import { connect } from 'react-redux'
import moment from 'moment'
import { Link } from '../routes'
import HttpService from '../utils/HttpService'
import ApiService from '../utils/ApiService'
import renderHTML from 'react-render-html'

import Router from 'next/router'


const PageLayout = dynamic(() => import('../components/SubPageLayout'), { loading: () => <p>loading Page Layout...</p> })

import appActions from '../actions/appActions'

class PostDetail extends React.PureComponent {
	static async getInitialProps({ store, isServer, req, pathname, query }) {
		const httpService = new HttpService()
		const apiService = new ApiService(httpService)
		let postDetail = null
		try {
			postDetail = await apiService.getPostDetail(isServer, query.postTitle)
		}
		catch (e) {
			console.error(e)
		}

		if (isServer) {
			try {
				const stickyCfg = await apiService.getTickyBarConfig(isServer)
				store.dispatch(appActions.setTickyBarCfg.invoke(stickyCfg))
			} catch (e) {
				console.error(e)
			}

			return { title: query.postTitle, category: query.category, postDetail }
		}
		return { postDetail: postDetail }
	}

	constructor(props) {
		super(props)
		moment.updateLocale('en', {
			relativeTime: {
				future: "trong %s",
				past: "cách đây %s",
				s: 'vài giây',
				ss: '%d giây',
				m: "1 phút",
				mm: "%d phút",
				h: "1 giờ",
				hh: "%d giờ",
				d: "1 ngày",
				dd: "%d ngày",
				M: "1 tháng",
				MM: "%d tháng",
				y: "1 năm",
				yy: "%d năm"
			}
		});
	}

	render() {
		const { appState, postDetail } = this.props
		return (
			<React.Fragment>
				<PageLayout appState={appState}>
					<div className='article-title'>
						<Link route='/'>
							<a className='button-back'>Quay Lại</a>
						</Link>
						<h1>{postDetail.title}</h1>
					</div>
					<div className='article-post-date'>
						Ngày đăng: {moment(postDetail.datePublic).fromNow()}
					</div>
					<div className='article-body'>
						{postDetail.content && renderHTML(postDetail.content)}
					</div>
				</PageLayout>
			</React.Fragment>
		)
	}
}

const mapStateToProps = state => ({
	appState: state.appState,
})

export default connect(mapStateToProps)(PostDetail)

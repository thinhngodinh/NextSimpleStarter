import React from 'react'
import dynamic from 'next/dynamic'
import { connect } from 'react-redux'
import moment from 'moment'
import { Link } from '../routes'
import Head from 'next/head'
import HttpService from '../utils/HttpService'
import ApiService from '../utils/ApiService'
import renderHTML from 'react-render-html'

const PageLayout = dynamic(() => import('../components/SubPageLayout'), { loading: () => <p>loading Page Layout...</p> })

import appActions from '../actions/appActions'

class PostDetail extends React.PureComponent {
	static async getInitialProps({ store, isServer, req, pathname, asPath, query }) {
		const httpService = new HttpService()
		const apiService = new ApiService(httpService)
		console.log('>>>>>>>>>>>>FE - PAGE REQUEST>>>>>>>>>>>>', asPath)
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

			return { title: query.postTitle, category: query.category, postDetail, asPath }
		}
		return { postDetail: postDetail, asPath }
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
		const { appState, postDetail, asPath } = this.props
		return (
			<React.Fragment>
				<Head>
					<title>Tân Thiên Long Mobile - {postDetail.title} - VNG</title>
					<meta property="og:image" content={postDetail.imageMeta || 'http://ttlm.zing.vn/static/img/mobile_subpage_header.jpg'} />
					<meta property="og:title" content={postDetail.title} />
					<meta property="og:description" content={postDetail.desc || 'Game TTLM phiên bản kế thừa và phát triển những tính năng của dòng game Thiên Long Bát Bộ. Môn phái kinh điển: Cái Bang - Kiều Phong, Nga Mi Thiên Long Thiên Sơn, Tiêu Dao - Hư Trúc. Huyết Chiến Giang Hồ 2019. VNG độc quyền phát hành. Game mobile kiếm hiệp mới.'} />
					<meta property="og:url" content={asPath} />
				</Head>
				<PageLayout appState={appState}>
					<div className='article-title'>
						<a href='javascript:;' onClick={() => window.history.back()} className='button-back'>Quay Lại</a>
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

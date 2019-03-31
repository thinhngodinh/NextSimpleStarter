import React from 'react'
import dynamic from 'next/dynamic'
import { connect } from 'react-redux'
import Head from 'next/head'
import { Link, Router } from '../routes'
import renderHTML from 'react-render-html'
import Pager from 'react-pager-component';


import HttpService from '../utils/HttpService'
import ApiService from '../utils/ApiService'
import { StyledPostList } from '../styled/StyledPostList'

const PageLayout = dynamic(() => import('../components/SubPageLayout'), { loading: () => <p>loading Page Layout...</p> })

import appActions from '../actions/appActions'


class PostList extends React.PureComponent {
	constructor(props) {
		super(props)
		this._handleNextPage = this._handleNextPage.bind(this)
	}
	static async getInitialProps({ store, isServer, req, pathname, asPath, query }) {
		const httpService = new HttpService()
		const apiService = new ApiService(httpService)
		let categories = []
		let postList = []
		let totalPost = 0
		let queryStart = 0
		let queryLimit = 6

		if (query.page > 1) {
			queryStart = (query.page - 1) * queryLimit
		}

		try {
			[categories, postList] = await Promise.all([
				apiService.getPostList(isServer, { _start: 0, _limit: 1 }),
				apiService.getPostList(
					isServer,
					{
						_start: queryStart,
						_limit: queryLimit,
						url: query.category
					}
				),
			])
		} catch (e) {
			console.error(new Date().toISOString(), e)
		}

		if (postList[0] && postList[0]['id']) {
			totalPost = await apiService.getTotalPostByCategory(isServer, postList[0]['id'])
		}

		if (isServer) {
			try {
				const stickyCfg = await apiService.getTickyBarConfig(isServer)
				store.dispatch(appActions.setTickyBarCfg.invoke(stickyCfg))
			} catch (e) {
				console.error(new Date().toISOString(), e)
			}
		}
		return {
			asPath,
			category: query.category,
			page: query.page || '1',
			postList: postList[0],
			categories: categories,
			totalPost
		}

	}

	_handleNextPage (current) {
		const {category} = this.props
		Router.push(`/${category}?page=${current}`)
	}

	render() {
		const { appState, category, categories, postList, totalPost, page, asPath } = this.props
		return (
			<React.Fragment>
				<Head>
					<title>Tân Thiên Long Mobile - {postList.name} - VNG</title>
					<meta property="og:image" content="http://ttlm.zing.vn/static/img/mobile_subpage_header.jpg" />
					<meta property="og:title" content={`Tân Thiên Long Mobile - ${postList.name} - VNG`} />
					<meta property="og:description" content="Tái hiện thế giới kiếm hiệp đan xen tình duyên một cách chân thật nhất" />
					<meta property="og:url" content={asPath} />
				</Head>
				<PageLayout appState={appState}>
					<StyledPostList>
						<div className='navigation'>
							<ul>
								{categories && categories.map((catItem, index) =>
									<li className={catItem.url === category ? 'active' : ''} key={index}>
										<Link route={`/${catItem.url}`}>
											<a className='categoryItem button-back'>
												<span>{catItem.name}</span>
											</a>
										</Link>
									</li>)}
							</ul>
						</div>
						<div className='post-list'>
							{postList && postList.articles.length > 0 && postList.articles.map((postItem, index) =>
								<Link key={index} route={`/${category}/${postItem.url}`}>
									<article>
										<div className='article-img'>
											{postItem.imageMeta.length > 0 && <img src={`http://ttlm.zing.vn${postItem.imageMeta}`} />}
											{postItem.imageMeta.length === 0 && <img src='/static/img/android-chrome-192x192.png' />}
											<img />
										</div>
										<div className='article-teaser'>
											<h3>{postItem.title.trim()}</h3>
											<div>
												{renderHTML(postItem.description)}
											</div>
										</div>
										<div className='article-actions'>
											<Link route={`/${category}/${postItem.url}`}>
												<a className='btn btn-more button-back'>Xem</a>
											</Link>
										</div>
									</article>
								</Link>
							)}
						</div>
						<div className='pager'>
							<Pager
								showFirstButton={false}
								showLastButton={false}
								length={Math.ceil(totalPost / 6)}
								current={parseInt(page)}
								expansion={2}
								showRestLabels={false}
								onChange={ this._handleNextPage } />
						</div>
					</StyledPostList>
				</PageLayout>
			</React.Fragment>
		)
	}
}

const mapStateToProps = state => ({
	appState: state.appState,
})

export default connect(mapStateToProps)(PostList)

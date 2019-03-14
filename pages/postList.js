import React from 'react'
import dynamic from 'next/dynamic'
import { connect } from 'react-redux'
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
	static async getInitialProps({ store, isServer, req, pathname, query }) {
		const httpService = new HttpService()
		const apiService = new ApiService(httpService)
		let categories = []
		let postList = []
		let totalPost = 0
		let queryStart = 0
		let queryLimit = 6

		if (query.page > 1) {
			queryStart = query.page * queryLimit - 1
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
			console.error(e)
		}

		if (postList[0] && postList[0]['id']) {
			totalPost = await apiService.getTotalPostByCategory(isServer, postList[0]['id'])
		}

		if (isServer) {
			try {
				const stickyCfg = await apiService.getTickyBarConfig(isServer)
				store.dispatch(appActions.setTickyBarCfg.invoke(stickyCfg))
			} catch (e) {
				console.error(e)
			}
		}
		return {
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
		const { appState, category, categories, postList, totalPost, page } = this.props
		return (
			<React.Fragment>
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
								length={Math.ceil(totalPost / 10)}
								current={parseInt(page)}
								expansion={3}
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

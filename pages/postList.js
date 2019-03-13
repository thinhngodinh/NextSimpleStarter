import React from 'react'
import dynamic from 'next/dynamic'
import { connect } from 'react-redux'
import { Link } from '../routes'
import renderHTML from 'react-render-html'


import HttpService from '../utils/HttpService'
import ApiService from '../utils/ApiService'
import { StyledPostList } from '../styled/StyledPostList'

const PageLayout = dynamic(() => import('../components/SubPageLayout'), { loading: () => <p>loading Page Layout...</p> })

import appActions from '../actions/appActions'


class PostList extends React.PureComponent {
	static async getInitialProps({ store, isServer, req, pathname, query }) {
		const httpService = new HttpService()
		const apiService = new ApiService(httpService)
		let categories = []
		let postList = []

		try {
			[categories, postList] = await Promise.all([
				apiService.getPostList(isServer, { _start: 0, _limit: 1 }),
				apiService.getPostList(isServer, { _start: 0, _limit: 14, url: query.category }),
			])
		} catch (e) {
			console.error(e)
		}

		if (isServer) {
			try {
				const stickyCfg = await apiService.getTickyBarConfig(isServer)
				store.dispatch(appActions.setTickyBarCfg.invoke(stickyCfg))
			} catch (e) {
				console.error(e)
			}
		}
		return { category: query.category, page: query.page || '1', postList: postList[0], categories: categories }

	}

	render() {
		const { appState, category, categories, postList, page } = this.props
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
								<article key={index}>
									<div className='article-img'>
										{postItem.imageMeta.length > 0 && <img src={`http://ttlm.zing.vn${postItem.imageMeta}`} />}
										{postItem.imageMeta.length === 0 && <img src='/static/img/android-chrome-192x192.png' />}
										<img />
									</div>
									<div className='article-teaser'>
										<h3>{postItem.title}</h3>
										<div>
											{renderHTML(postItem.description)}
										</div>
									</div>
									<div className='article-actions'>
										<Link route={`/${category}/${postItem.url}`}>
											<a className='btn btn-more'>Xem</a>
										</Link>
									</div>
								</article>)}
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

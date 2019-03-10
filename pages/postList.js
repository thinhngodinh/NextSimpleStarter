import React from 'react'
import dynamic from 'next/dynamic'
import { connect } from 'react-redux'
import HttpService from '../utils/HttpService'
import ApiService from '../utils/ApiService'


const PageLayout = dynamic(() => import('../components/SubPageLayout'), {loading: () => <p>loading Page Layout...</p>})

import appActions from '../actions/appActions'


class PostList extends React.PureComponent {
	static async getInitialProps({ store, isServer, req, pathname, query }) {
		if (isServer) {
			const httpService = new HttpService()
			const apiService = new ApiService(httpService)
			try {
				const stickyCfg = await apiService.getTickyBarConfig(isServer)
				store.dispatch(appActions.setTickyBarCfg.invoke(stickyCfg))
			} catch (e) {
				console.error(e)
			}
			return {category: query.category}
		}
	}

	render () {
		const { appState, category } = this.props
		return (
			<React.Fragment>
				<PageLayout appState={appState}>
					<span>Children Props Post List for {category}</span>
				</PageLayout>
			</React.Fragment>
		)
	}
}

const mapStateToProps = state => ({
	appState: state.appState,
})

export default connect(mapStateToProps)(PostList)

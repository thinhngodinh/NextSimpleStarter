import 'isomorphic-fetch'
import React from 'react'
import { connect } from 'react-redux'

import Fork from '../components/Fork'
import Todo from '../components/Todo'
import appActions from '../actions/appActions'

class Index extends React.Component {
	static async getInitialProps({ store }) {
		// dispatch action to saga for initial data
		store.dispatch(appActions.initApp.invoke())
		return { stars: 20 }
	}

	render() {
		const { stars, appState } = this.props
		console.log('COMPONENT DATA', appState);
		return (
			<div>
				<Fork stars={stars} />
				<div>
					<Todo />
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	appState: state.appState
})

export default connect(mapStateToProps)(Index)

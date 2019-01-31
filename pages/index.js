import 'isomorphic-fetch'
import React from 'react'
import { connect } from 'react-redux'

import Fork from '../components/Fork'
import Todo from '../components/Todo'
import appActions from '../actions/appActions'

class Index extends React.Component {
	static async getInitialProps({ store, isServer }) {
		// dispatch action to saga for initial data
		if(!isServer) {
			return {isServer, stars: 21}
		}
		const res = await fetch('https://jsonplaceholder.typicode.com/users')
		const data = await res.json()
		console.log('>>>>> application FETCHED API');
		store.dispatch(appActions.setAppInitData.invoke([...data]))
		return { isServer, stars: 20 }
	}

	render() {
		const { stars, appState } = this.props
		console.log('COMPONENT DATA', appState.init);
		return (
			<div>
				<div>
					<p>There are {appState.initAppData.length} people in list</p>
					<ul>
						{appState.initAppData.map((person, index) => <li key={index}>{person.name}</li>)}
					</ul>
				</div>
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

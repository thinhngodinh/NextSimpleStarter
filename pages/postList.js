import React from 'react'

export default class PostList extends React.PureComponent {
	static async getInitialProps({ store, isServer, req, pathname, query }) {

	}

	render () {
		return (
			<React.Fragment>
				<div>
					Post List Page
				</div>
			</React.Fragment>
		)
	}
}

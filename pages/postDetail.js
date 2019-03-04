import React from 'react'
import dynamic from 'next/dynamic'
import { connect } from 'react-redux'

class PostDetail extends React.PureComponent {
	static async getInitialProps({ store, isServer, req, pathname, query }) {
		return {title: query.postTitle}
	}

	constructor(props) {
		super(props)
	}

	render () {
		const { title } = this.props

		return (
			<React.Fragment>
				<div>Post Detail {title}</div>
			</React.Fragment>
		)
	}
}

export default connect()(PostDetail)

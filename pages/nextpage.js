import 'isomorphic-fetch'
import React from 'react'
import Link from 'next/link'

import { connect } from 'react-redux'

class NextPage extends React.Component {

	static async getInitialProps({ store }) {
		console.log('init state page next')
		return {nextPageProps: {
			sample: 'sample',
			data: [1,2,3]
		}};
	}

	render() {
		const { nextPageProps } = this.props
		return (
			<div>
				<h1>Next Page Added</h1>
				<div>
					No Todo App Here <br/ >
					<Link href='/'>
						<a>Go To index {nextPageProps.sample}</a>
					</Link>
				</div>
				<div>
					<img src='/static/img/thinh_face.png' />
				</div>
			</div>
		)
	}
}

export default connect()(NextPage)

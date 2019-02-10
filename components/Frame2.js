import { PureComponent, Fragment } from 'react'

import Frame2Event from './Frame2Event'
import Styled from './Frame2Styled'


export default class Frame2 extends PureComponent {
	constructor(props) {
		super(props)
		this.state = {
			showModal: false
		}
		this.toggleModal = this.toggleModal.bind(this)
	}

	toggleModal (e) {
		this.setState({
			showModal: !this.state.showModal
		})
	}

	staticImgPath = '/static/img'

	render () {
		const {showModal} = this.state
		return(
			<Fragment>
				<Styled.FrameContent>
					<div className='term-btn'>
						<a href='javascript:;' className='btn thele'></a>
						<a href='javascript:;' className='btn qua'></a>
					</div>
					<div className='start-event'>
						<a href='javascript:;' className='btn-start' onClick={this.toggleModal}></a>
						<img className='hand' src={`${this.staticImgPath}/hand.png`} />
					</div>
				</Styled.FrameContent>
				<div className='qr-scan'>
					<img src={`${this.staticImgPath}/qrscan.png`} />
				</div>
				{showModal && <Frame2Event closeModal={this.toggleModal} />}
			</Fragment>
		)
	}
}

import { PureComponent, Fragment } from 'react'
import Styled from './Frame1Styled'

export default class Frame1 extends PureComponent {
	constructor(props) {
		super(props)
	}

	staticImgPath = '/static/img'
	state = {
		playVid: false,
		showTitle: false,
		showPlayButton: false
	}

	componentDidMount() {
		setTimeout(() => {this.setState({
			showTitle: true
		}, () => this.setState({showPlayButton: true}))}, 500)
	}

	render() {
		const {showTitle} = this.state
		const { toggleModal, totalUsers } = this. props
		return (
			<Fragment>
				<Styled.Logo alt='Tân Thiên Long - http://ttlm.zing.vn' src={`${this.staticImgPath}/game_logo.png`} />
				<Styled.FrameContent>
					<Styled.Title className={`${showTitle ? '': 'hidden'}`} alt='Tuyệt tác kiếm hiệp Kim Dung' src={`${this.staticImgPath}/f1_title.png`} />
					<div className='framefooter'>
						<span className='user-counter'>{totalUsers || 'N/A'}</span>
						<a href='javascript:;' className='btn-register' onClick={toggleModal}>
							<img src={`${this.staticImgPath}/btn_register.png`} />
						</a>
						{totalUsers < 50000 && <img className='totaluser-gift' src={`${this.staticImgPath}/moc1-3.png`} />}
						{totalUsers >= 50000 && totalUsers < 100000 && <img className='totaluser-gift' src={`${this.staticImgPath}/moc2-3.png`} />}
						{totalUsers >= 100000 && <img className='totaluser-gift' src={`${this.staticImgPath}/moc3-3.png`} />}

					</div>
				</Styled.FrameContent>

			</Fragment>
		)
	}
}

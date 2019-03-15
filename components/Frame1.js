import { PureComponent, Fragment } from 'react'
import { Link } from '../routes'

import AnimatedNumber from 'react-animated-number';
import Styled from './Frame1Styled'

export default class Frame1 extends PureComponent {
	constructor(props) {
		super(props)
		this.numberFormat = new Intl.NumberFormat('vi-Vn')
		this.staticImgPath = '/static/img'
		this.state = {
			playVid: false,
			showTitle: false,
			showPlayButton: false
		}
	}


	componentDidMount() {
		setTimeout(() => {
			this.setState({
				showTitle: true
			}, () => this.setState({ showPlayButton: true }))
		}, 500)
	}

	_getMobileF1bg(totalUsers) {
		if (totalUsers < 50000) {
			return '/static/img/f1_1_bg_20k.jpg'
		} else if (totalUsers >= 50000 && totalUsers < 100000) {
			return '/static/img/f1_1_bg_50k.jpg'
		} else if (totalUsers >= 100000) {
			return '/static/img/f1_1_bg_100k.jpg'
		}
	}

	render() {
		const { showTitle } = this.state
		const { toggleModal, totalUsers } = this.props
		return (
			<Fragment>
				<Styled.Logo alt='Tân Thiên Long - http://ttlm.zing.vn' src={`${this.staticImgPath}/game_logo.png`} />
				<Styled.FrameContent>
					<Styled.Title className={`${showTitle ? '' : 'hidden'}`} alt='Tuyệt tác kiếm hiệp Kim Dung' src={`${this.staticImgPath}/f1_title.png`} />
					<div className='framefooter' style={{ background: `url(${this._getMobileF1bg(totalUsers)}) center top` }}>
						<div className='mobile-footer-title'>
							<img src='/static/img/f1_2_title.png' />
						</div>
						<AnimatedNumber
							className='user-counter'
							duration={5000}
							stepPrecision={0}
							value={totalUsers}
							formatValue={(n) => <React.Fragment>{this.numberFormat.format(n)}<span className='label'> NGƯỜI LƯU DANH</span></React.Fragment>}
						/>
						<Link route='su-kien/su-kien-luu-danh-doat-bao-huyet-chien-giang-ho'>
							<a className='t-c-link'></a>
						</Link>
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

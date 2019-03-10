import { PureComponent, Fragment } from 'react'

export default class Frame4 extends PureComponent {
	staticImagePath = '/static/img'
	render () {
		return(
			<Fragment>
				<div>
					<div className='frame-title'>
						<img src='/static/img/title_he_thong_ban_do.png' />
					</div>
					<a href='javascript:;' className='absolute-link lacduong'>
						<img src={`${this.staticImagePath}/f4_lacduong.png`} className='absolute-image' />
					</a>
					<a href='javascript:;' className='absolute-link hoangdia'>
						<img src={`${this.staticImagePath}/f4_tan_hoang_dia_cung.png`} className='absolute-image' />
					</a>
					<a href='javascript:;' className='absolute-link tochau'>
						<img src={`${this.staticImagePath}/f4_tochau.png`} className='absolute-image' />
					</a>
					<a href='javascript:;' className='absolute-link hientrang'>
						<img src={`${this.staticImagePath}/f4_tuhientrang.png`} className='absolute-image' />
					</a>
					<a href='javascript:;' className='absolute-link yenvuong'>
						<img src={`${this.staticImagePath}/f4_yenvuong.png`} className='absolute-image' />
					</a>
				</div>
			</Fragment>
		)
	}
}

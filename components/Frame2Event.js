import React from 'react'

import Styled from './Frame2EventStyled'

export default class Frame2Event extends React.PureComponent {
	state = {
		navigation: [
			{
				label: 'Đăng ký',
				active: false,
				id: 1
			},
			{
				label: 'Điểm danh',
				active: false,
				id: 2
			},
			{
				label: 'Share',
				active: false,
				id: 3
			},
			{
				label: 'Mở lộc',
				active: false,
				id: 4
			},
			{
				label: 'Kho quà',
				active: false,
				id: 5
			}
		],
		activeIndex: 1
	}

	handleNaviItemClick (itemIndex) {
		if (this.state.activeIndex !== itemIndex) {
			this.setState({
				activeIndex: itemIndex
			})
		}
	}

	render() {
		const { closeModal } = this.props
		const { navigation, activeIndex } = this.state
		return (
			<Styled.EventClass>
				<div className='backdrop' onClick={closeModal}></div>
				<div className='modal-container'>
					<a href='javascript:;' className='closebtn' onClick={closeModal}></a>
					<div className='modal-content'>
						<div className='event-navigation'>
							<ul>
								{navigation && navigation.map(navItem =>
									<li className={`naviItem ${navItem.id === activeIndex ? 'active' : ''}`} key={navItem.id}>
										<a href='javascript:;' onClick={() => this.handleNaviItemClick(navItem.id)}>{navItem.label}</a>
									</li>)}
							</ul>
						</div>
					</div>
				</div>
			</Styled.EventClass>
		)
	}
}

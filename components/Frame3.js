import { PureComponent, Fragment } from 'react'

import f3Config from '../static/frame3Config.json'

export default class Frame3 extends PureComponent {
	staticImagePath = '/static/img'
	constructor(props) {
		super(props);
		this.state = {
			activeItem: f3Config[0],
			isHide: false
		}
		this.interval = null;
	}

	handleChangeView(stageItem) {
		if (stageItem.id === this.state.activeItem.id)
			return
		this.setState({
			isHide: true
		})
		setTimeout(
			() => this.setState({activeItem: stageItem, isHide: false}),
			500
		)
	}

	render () {
		const { activeItem, isHide } = this.state
		return(
			<Fragment>
				<div>
					<div className='stage'>
						<img className={`content-img ${isHide ? 'hide' : 'show'}`} src={`${this.staticImagePath}/${activeItem.content}`} />
					</div>
					<div className={`stageBackgroud ${isHide ? 'hide' : 'show'}`} style={{backgroundImage: `url(${this.staticImagePath}/${activeItem.background})`}}>
					</div>
					<div className='navigation'>
						<ul>
							{f3Config.map(item => (
								<li key={item.id} className={`${item.id === activeItem.id ? 'active': ''}`}>
									<a
										onClick={() => this.handleChangeView(item)}
										href='javascript:;'
										className='btn-pager'
										style={{backgroundImage: `url(${this.staticImagePath}/${item.button})`}}></a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</Fragment>
		)
	}
}

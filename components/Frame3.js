import { PureComponent, Fragment } from 'react'

import f3Config from '../static/frame3Config.json'

export default class Frame3 extends PureComponent {
	staticImagePath = '/static/img'
	constructor(props) {
		super(props);
		this.state = {
			activeItem: f3Config[0],
			isHide: false,
			autoPlay: false
		}
		this.interval = null;
	}

	startAutoPlay (duration = 4000) {
		this.setState({ autoPlay: true })
		this.interval = setInterval(() => this._nextSlide(), duration)
	}

	_nextSlide() {
		const {activeItem} = this.state
		const nextIndex = f3Config.indexOf(activeItem) === (f3Config.length - 1) ? 0 : f3Config.indexOf(activeItem) + 1
		this.handleChangeView(f3Config[nextIndex])
		console.log('invoke nextSlide call interval from index', nextIndex)
	}

	componentDidMount() {
		this.startAutoPlay();
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

	componentWillUnmount() {
		clearInterval(this.interval)
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

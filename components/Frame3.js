import { PureComponent, Fragment } from 'react'

export default class Frame3 extends PureComponent {
	staticImagePath = '/static/img'
	constructor(props) {
		super(props);
		this.state = {
			activeItem: props.config[0],
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
		const { config } = this.props

		const {activeItem} = this.state
		const nextIndex = config.indexOf(activeItem) === (config.length - 1) ? 0 : config.indexOf(activeItem) + 1
		this.handleChangeView(config[nextIndex])
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
		const { config } = this.props
		return(
			<Fragment>
				<div>
					<div className='stage'>
						<img className={`content-img ${isHide ? 'hide' : 'show'}`} src={`${activeItem.content}`} />
					</div>
					<div className={`stageBackgroud ${isHide ? 'hide' : 'show'}`} style={{backgroundImage: `url(${activeItem.background})`}}>
					</div>
					<div className='navigation'>
						<ul>
							{config.map(item => (
								<li key={item.id} className={`${item.id === activeItem.id ? 'active': ''}`}>
									<a
										onClick={() => this.handleChangeView(item)}
										href='javascript:;'
										className='btn-pager'
										style={{backgroundImage: `url(${item.button})`}}></a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</Fragment>
		)
	}
}

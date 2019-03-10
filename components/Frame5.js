import { PureComponent, Fragment } from 'react'
import Slider from "react-slick";

import YoutubePlayer from './Frame1Youtube'

export default class Frame5 extends PureComponent {
	constructor(props) {
		super(props)
		this.state = {
			activeYid : null,
			w: 0,
			h: 0
		}
		this.handleClose = this.handleClose.bind(this)
		this.handlePlayVideo = this.handlePlayVideo.bind(this)
	}

	handleClose() {
		this.setState({activeYid: null})
	}

	handlePlayVideo (yid) {
		this.setState({
			h: (window.innerWidth * 0.8 * 9)/16,
			w: window.innerWidth * 0.8,
			activeYid: yid
		});
	}

	render() {
		const {config} = this.props
		const {activeYid, w, h} = this.state
		const settings = {
			autoplay: true,
			autoplaySpeed: 5000,
			dot: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1
		}
		return (
			<Fragment>
				<div className='custom-caroulse'>
					<div className='frame-title'>
						<img src='/static/img/title_he_thong_tinh_nang.png' />
					</div>
					<div className='absolute-container'>
						<Slider {...settings}>
							{config.slider && config.slider.map((slideItem, index) =>
								<div key={index} className='my-slide'>
									<div className='slide-row'>
										<a href='javascript:;' className='photo-landscape'>
											<img src={slideItem.landscape} />
										</a>
									</div>
									<div className='slide-row'>
										<a href='javascript:;' className='youtube-link' onClick={() => this.handlePlayVideo(slideItem.video.yid)}>
											<img src={slideItem.video.thumbnail} />
										</a>
										<a href='javascript:;' className='photo-square'>
											<img src={slideItem.square} />
										</a>
									</div>
								</div>)}
						</Slider>
					</div>
				</div>
				{activeYid &&
					<div className='video-playlist'>
						<YoutubePlayer
							playlist={config.videoPlayList}
							handleChangeYid={this.handlePlayVideo}
							w={w}
							h={h}
							yId={activeYid}
							closeProp={this.handleClose}/>
					</div>
				}
			</Fragment>
		)
	}
}

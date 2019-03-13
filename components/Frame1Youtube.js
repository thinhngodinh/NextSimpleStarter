import React from 'react';
import YouTube from 'react-youtube';
import Slider from "react-slick";

const PLAYERSTATE = {
	BUFFERING: 3,
	CUED: 5,
	ENDED: 0,
	PAUSED: 2,
	PLAYING: 1,
	UNSTARTED: -1
}

export default class YoutubePlayer extends React.PureComponent {
	constructor(props) {
		super(props)
		this.state = {
			yId: props.yId
		}
		this.handleChangeVideo = this.handleChangeVideo.bind(this)
	}
	static defaultProps = {
		yId: '6Dakd7EIgBE',
		closeProp: null,
		w: '640',
		h: '390'
	}

	handleChangeVideo(newYId) {
		this.setState({ yId: newYId })
	}

	render() {
		const { closeProp, w, h, playlist } = this.props

		const opts = {
			height: h,
			width: w,

			playerVars: { // https://developers.google.com/youtube/player_parameters
				autoplay: 1,
				controls: 1,
			}
		};

		const settings = {
			slidesToShow: Math.floor (w / 180),
			centerMode: true,
			slidesToScroll: 1,
			infinite: true,
		}

		return (
			<React.Fragment>
				<YouTube
					videoId={this.state.yId}
					opts={opts}
					onReady={this._onReady}
				/>
				{playlist &&
					<div className='playlist' style={{ width: w, height: 100, marginTop: 15 }}>
						<Slider {...settings}>
							{playlist.map((videoItem, index) =>
								<div key={index}>
									<a href='javascript:;' className='youtube-item' onClick={() => this.handleChangeVideo(videoItem.yid)}>
										<img src={videoItem.thumbnail.length ? `http://ttlm.zing.vn${videoItem.thumbnail}` : '/static/img/videoPlaceHolder.gif'} />
									</a>
								</div>
							)}
						</Slider>
					</div>
				}
				<div className='backdrop' onClick={closeProp}></div>
				{closeProp && <a className='closeButton' href='javascript:;' onClick={closeProp}></a>}
			</React.Fragment>
		);
	}

	_onReady(event) {
		// access to player in all event handlers via event.target
		// event.target.pauseVideo();
	}
}

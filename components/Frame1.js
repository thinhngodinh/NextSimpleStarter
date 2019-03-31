import { PureComponent, Fragment } from 'react'

import Styled from './Frame1Styled'
import YoutubePlayer from './Frame1Youtube'

export default class Frame1 extends PureComponent {
	constructor(props) {
		super(props)
		this.staticImgPath = '/static/img'
		this.state = {
			playVid: false,
			showTitle: false,
			showPlayButton: false,
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

	handlePlayVideo (yid = 'TFESJ5yZiKc') {
		this.setState({
			h: (window.innerWidth * 0.8 * 9)/16,
			w: window.innerWidth * 0.8,
			activeYid: yid
		});
	}

	render() {
		const { activeYid, w, h } = this.state
		return (
			<Fragment>
				<Styled.FrameContent>
					<button className='yt-single-player play-btn' onClick={() => this.handlePlayVideo()}>
						<img src={`${this.staticImgPath}/play_button_lg.png`} />
					</button>
					{activeYid &&
						<div className='video-playlist'>
							<YoutubePlayer
								w={w}
								h={h}
								yId={activeYid}
								closeProp={this.handleClose}/>
						</div>
					}
				</Styled.FrameContent>

			</Fragment>
		)
	}
}

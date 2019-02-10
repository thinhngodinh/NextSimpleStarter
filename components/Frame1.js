import { PureComponent, Fragment } from 'react'

import Styled from './Frame1Styled'
import YoutubePlayer from './Frame1Youtube'

export default class Frame1 extends PureComponent {
	constructor(props) {
		super(props)
		this.toggleVideoPlayer = this.toggleVideoPlayer.bind(this)
	}

	toggleVideoPlayer (e) {
		this.setState({playVid: !this.state.playVid})
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
		const {playVid, showTitle, showPlayButton} = this.state
		return (
			<Fragment>
				<Styled.Logo alt='Tân Thiên Long - http://ttlm.zing.vn' src={`${this.staticImgPath}/game_logo.png`} />
				<Styled.FrameContent>
					<Styled.Title className={`${showTitle ? '': 'hidden'}`} alt='Tuyệt tác kiếm hiệp Kim Dung' src={`${this.staticImgPath}/f1_title.png`} />
					<Styled.PlayButton className={`${showTitle ? '': 'hidden'}`} href='javascript:;' onClick={this.toggleVideoPlayer}>
						<img src={`${this.staticImgPath}/play_button.png`} />
					</Styled.PlayButton>

				</Styled.FrameContent>

				{playVid && <Styled.VideoPlayer>
						<div className='backdrop' onClick={this.toggleVideoPlayer}></div>
						<YoutubePlayer
							closeProp={this.toggleVideoPlayer}
							w='820'
							h='450'
							yId='6Dakd7EIgBE' />
					</Styled.VideoPlayer>}

			</Fragment>
		)
	}
}

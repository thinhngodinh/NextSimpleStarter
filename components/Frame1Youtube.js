import React from 'react';
import YouTube from 'react-youtube';

export default class YoutubePlayer extends React.PureComponent {
	static defaultProps = {
		yId: '6Dakd7EIgBE',
		closeProp: null,
		w: '640',
		h: '390'
	}
	render() {
		const {yId, closeProp, w, h} = this.props
    const opts = {
      height: h,
			width: w,

      playerVars: { // https://developers.google.com/youtube/player_parameters
				autoplay: 1,
				controls: 0,
      }
    };

    return (
			<div>
				<YouTube
					videoId={this.props.yId}
					opts={opts}
					onReady={this._onReady}
				/>
				<div className='front_cover'></div>
				{closeProp && <a className='closeButton' href='javascript:;' onClick={closeProp}>x</a>}
			</div>
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    // event.target.pauseVideo();
  }
}

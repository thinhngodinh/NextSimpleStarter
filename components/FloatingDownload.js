import React from 'react'

import { StyledQr } from '../styled/FrameStyle'

const renderTarget = (linkType) => {
	if (
		linkType.indexOf('download') !== -1
		|| linkType.indexOf('fb') !== -1
		|| linkType.indexOf('youtube') !== -1) {
		return '_blank';
	}
	return '_self';
}

const FloatingDownload = (props) => (
	<StyledQr>
		<div className='qr-scan'>
			<img src='/static/img/qrscan.png' />
			{props.stickyCfg && props.stickyCfg.map(stickyItem => {
				if (stickyItem.link.indexOf('#') === 0) return;
				return (
					<a
						key={stickyItem.id}
						href={stickyItem.link}
						target={renderTarget(stickyItem.type)}
						className={stickyItem.type}></a>)
			})}
		</div>
	</StyledQr>
)

export default FloatingDownload

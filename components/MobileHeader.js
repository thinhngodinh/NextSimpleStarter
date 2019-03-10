import React from 'react'
import { isAndroid, isIOS } from 'react-device-detect'
import StyledMobileHeader from '../styled/StyledMobileHeader'

export default class MobileHeader extends React.PureComponent {

	render() {
		const {stickyCfg} = this.props

		const links = stickyCfg.filter(stickyItem => {
			if (isAndroid && stickyItem.type.indexOf('playstore') > 0) {
				return true
			} else if (isIOS && stickyItem.type.indexOf('applestore') > 0) {
				return true
			} else if (stickyItem.type.indexOf('topup') > 0) {
				return true
			} else if (stickyItem.type.indexOf('footer') > 0) {
				return true
			}
		})

		return (
			<StyledMobileHeader>
				<img src='/static/img/mobile_header.png' />
				{links && links.map(linkItem => <a key={linkItem.id} href={linkItem.link} className={linkItem.type}></a>)}
			</StyledMobileHeader>
		)
	}
}

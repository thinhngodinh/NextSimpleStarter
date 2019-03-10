import React from 'react'
import NoSSR from 'react-no-ssr'
import { isMobile } from 'react-device-detect'
import MobileHeader from './MobileHeader'
import FloatingDownload from './FloatingDownload'
import Footer from './Footer'
import { StyledSubPageLayout } from '../styled/FrameStyle'

const SubPageLayout = (props) => {
	const { appState } = props

	return (<StyledSubPageLayout>
		<NoSSR>
			<MobileHeader stickyCfg={appState.stickyCfg} />
			<div className='page-banner'>
				{!isMobile && <img src='/static/img/subpage_header_bg.jpg' />}
				{isMobile && <img src='/static/img/mobile_subpage_header.jpg' />}
			</div>
		</NoSSR>
		<FloatingDownload stickyCfg={appState.stickyCfg} />
		<div className='page-content'>
			{props.children}
		</div>
		<Footer />
	</StyledSubPageLayout>)
}
export default SubPageLayout

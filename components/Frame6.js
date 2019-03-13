import { PureComponent, Fragment } from 'react'
import { Link } from '../routes'
import Slider from "react-slick";

const slideConfig = {
	autoplay: true,
	autoplaySpeed: 5000,
	dots: true,
	infinite: true,
	speed: 800,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false
}

export default class Frame6 extends PureComponent {
	renderTarget(linkType) {
		if (
			linkType.indexOf('download' > -1)
			|| linkType.indexOf('fb') > -1
			|| linkType.indexOf('youtube') > -1) {
			return '_blank';
		}
		return '_self';
	}
	render() {
		const { stickyCfg, slides } = this.props;
		return (
			<Fragment>
				<div>
					<div className='frame-title'>
						<img src='/static/img/title_tin-tuc.png' />
					</div>
					<div className='news-section news-head-section'>
						<div className='download-box'>
							<img src='/static/img/f_news_download.png' />
							<a href='https://id.zing.vn/v2/register' className='download zing_id' target='_blank'></a>
							{stickyCfg && stickyCfg.map((stickyItem, index) => {
								if (stickyItem.link.indexOf('#') === 0) return;
								return (
									<a
										key={index}
										href={stickyItem.link}
										target={this.renderTarget(stickyItem.type)}
										className={stickyItem.type}></a>)
							})}
						</div>
						<div className='carousel-box'>
							<Slider {...slideConfig} >
							{slides && slides.map((item, index) => {
								return (
									<div key={index} className='slide-item'>
										<Link route={item.link}>
											<a target={item.isTab ? '_blank' : '_self'}>
												<img src={`http://ttlm.zing.vn${item.image}`} />
											</a>
										</Link>

									</div>
								)
							}
							)}
							</Slider>
						</div>
					</div>
					<div className='news-section news-content-section'>
						<div className='guide-box'>
							<img src='/static/img/tintuc_highlight_post.png' />
							<Link route='/thong-tin/huong-dan-nap-the'>
								<a className='guide-link huong-dan-nap-the'></a>
							</Link>
							<Link route='/thong-tin/code-tan-thu'>
								<a className='guide-link code-tan-thu'></a>
							</Link>
							<Link route='/thong-tin/cam-nang-tan-thu'>
								<a className='guide-link cam-nang-tan-thu'></a>
							</Link>
							<Link route='/thong-tin/cong-dong'>
								<a className='guide-link code-tan-thu'></a>
							</Link>
						</div>
						<div className='news-list'>
							{this.props.children}
						</div>
					</div>
				</div>
			</Fragment>
		)
	}
}

import React from 'react'
import moment from 'moment'
import {Link} from '../routes'


const ArticleItem = (props) => (
	<div className='article-item'>
		<Link route={`/${props.catUrl}/${props.detail.url}`}>
			<a className='article-title'>
				{props.detail.title}
			</a>
		</Link>
		<span className='article-public-date'>{moment(props.detail.datePublic).format('DD-MM-YYYY')}</span>
	</div>
);

export default ArticleItem;

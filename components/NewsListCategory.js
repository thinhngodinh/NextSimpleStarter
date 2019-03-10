import React from 'react'
import ArticleItem from './ArticleItem'

const NewsByCategory = ({ data }) => {
	const { url: catUrl, articles } = data

	return (
		<React.Fragment>
			{articles && articles.length === 0 && <span>Chưa có bài viết</span>}
			{articles && articles.length > 0 && articles.map((articleItem, index) => {
				return (<ArticleItem key={index} catUrl={catUrl} detail={articleItem} />)
			})}
		</React.Fragment>
	)
};

export default NewsByCategory;

import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import NewsListCategory from './NewsListCategory'



const NewsList = ({ postList }) => {
	return (
		<React.Fragment>
			<Tabs>
				<TabList>
				{postList && postList.map((catItem, index) => <Tab key={index}>
					{catItem.name}
				</Tab>)}
				</TabList>

				{postList && postList.map((catItem, index) => <TabPanel key={index} className='newstab-item'>
					<NewsListCategory data={catItem} />
				</TabPanel>
				)}
			</Tabs>
		</React.Fragment>
	)
};

export default NewsList;

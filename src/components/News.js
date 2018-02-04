import React from 'react';
import NewsItem from './NewsItem';


let News = (props) => {
	return (
		<div className='news'>
			<h1 className='striked'><span>Current news feed</span></h1>	
			{<div className='news-items row'>
				{props.news.map((n) =>(
					<NewsItem 
						key={n.guid}
						{... n}							
					/>
				))}
			</div>}
		</div>
	);	
}

export default News;
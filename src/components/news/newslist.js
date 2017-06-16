/**
 * Created by shaolong on 2017/6/15.
 */
import React from 'react';
import News from './news.js';

const NewsList = (props) => {
	const list = [];
	props.newslist.news && props.newslist.news.map((ns) => {
		list.push(<News key={ns.id} ns={ns}/>)
	})
	return (
		<div className="wrap container-fluid">
			{
				list
			}
		</div>
	)
}
export default NewsList;
/**
 * Created by shaolong on 2017/6/15.
 */
import React from 'react';
import News from './news.js';
import logo from '../../image/dota2-home.png';


const NewsList = (props) => {
	const list = [];
	props.newslist.news && props.newslist.news.map((ns) => {
		list.push(<News key={ns.id} ns={ns}/>)
	})
	return (
		<div>
			<div className="App-header">
				<img src={logo}
				     className="App-logo" alt="logo"/>
				{/*<img src={logo} srcSet="two.png 2x, three.png 3x, four.png 4x"
				 className="App-logo" alt="logo"/>*/}
			</div>
			<div className="wrap container-fluid">
				{
					list
				}
			</div>
		</div>

	)
}
export default NewsList;
/**
 * Created by shaolong on 2017/6/15.
 */
import React from 'react';
import { Link } from 'react-router-dom';
import './styles/newslist.css';

const News = (props) => {
	let title = props.ns.title ? props.ns.title : '';
	let content = props.ns.content ? props.ns.content : '';
	return (
		<Link to="/detail" className="news-wrap flex-left" href="#">
			<div className="image unit-1-3"></div>
			<div className="news unit-2-3">
				<h2 className="title">{ title }</h2>
				<div className="content">{ content }</div>
			</div>
		</Link>
	)
}
export default News;

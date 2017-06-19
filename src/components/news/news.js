/**
 * Created by shaolong on 2017/6/15.
 */
import React from 'react';
import { Link } from 'react-router-dom';
import './styles/newslist.css';

import ig from '../../image/ig.jpeg';
import comment from '../../image/comments.svg';


const News = (props) => {
	// let title = props.ns.title ? props.ns.title : '';
	// let content = props.ns.content ? props.ns.content : '';
	// let imgsrc = props.ns.img ? props.ns.img : '';
	// let number = props.ns.comments ? props.ns.comments : '';
	const { title, id, comments } = props.ns;
	{/*<div className="content">{ content }</div>*/}
	return (
		<Link to={{pathname: `/detail/${id}`}} className="news-wrap flex-left">
			<dl className="flex-left">
				<dt className="news-wrap-dt unit-1-3">
					<img className="news-wrap-img" src={ig} alt="ig战队成员照"/>
				</dt>
				<dd className="news unit-2-3">
					<h2 className="title">{ title }</h2>
					<div className="intro">
						<div className="comment">
							<span className="number">{comments}</span>
							<img className="comment-img" src={comment} alt="评论"/>
						</div>
					</div>
				</dd>
			</dl>
		</Link>
	)
}
export default News;

/**
 * Created by shaolong on 2017/6/18.
 */
import React, {Component} from 'react';

import './styles/detail.css';

import ig2 from '../../image/ig2.jpeg';

class NewsDetail extends Component {
	render() {
		const {title, content} = this.props;
		return (
			<div className="wrap flex-vertical container-fluid">
				<h2 className="detail-title">{title}</h2>
				<div className="image">
					<img src={ig2} alt="ig战队合照"/>
				</div>
				<div className="content">{content}</div>
				<div className="op flex-right">
					<div className="heart">
						<input id="toggle-heart" type="checkbox"/>
						<label htmlFor="toggle-heart">❤</label>
					</div>

				</div>
			</div>
		)
	}
}

export default NewsDetail;
/**
 * Created by shaolong on 2017/6/13.
 */
import React from 'react';

import './loading.css';

const Loading = (props) => {
	return (
		<div className={props.show ? "loading" : "hide loading"}>
			<div className="load-wrap">
				<p className={props.error ? "error" : "hide error"}>服务器有点忙</p>
				<div className={props.error ? " hide load-3" : "load-3"}>
					<div className="line"></div>
					<div className="line"></div>
					<div className="line"></div>
				</div>
			</div>
		</div>
	)
}

export default Loading;
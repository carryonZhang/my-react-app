/**
 * Created by shaolong on 2017/6/13.
 */
import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';

import App from './container/app/App';


class Routers extends Component {

	render() {
		return (
			<HashRouter key={Math.random()}>
				<Route path="/" component={App}></Route>
			</HashRouter>
		)
	}
}
export default Routers;
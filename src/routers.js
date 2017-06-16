/**
 * Created by shaolong on 2017/6/13.
 */
import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'

import App from './container/app/App';

const history = createBrowserHistory();

class Routers extends Component {
	render() {
		return (
			<Router history={history} key={Math.random()}>
				<Route path="/" component={App}></Route>
			</Router>
		)
	}
}
export default Routers;
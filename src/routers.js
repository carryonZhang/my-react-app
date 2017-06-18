/**
 * Created by shaolong on 2017/6/13.
 */
import React, { Component } from 'react';
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import App from './container/app/App';
import NewsContainer from './container/news/news_container';
import DetailContainer from './container/detail';

const hashHistory = createBrowserHistory();

class Routers extends Component {

	render() {
		return (
			<HashRouter history={hashHistory}>
				<App>
					<Switch>
						<Route path="/" exact component={NewsContainer}></Route>
						<Route path="/detail/:id" component={DetailContainer}></Route>
					</Switch>
				</App>
			</HashRouter>
		)
	}
}
export default Routers;
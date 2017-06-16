import React, { Component } from 'react';
import { connect } from "react-redux";
import * as action from '../../action';

import Loading from '../../components/public/loading/index';
import NewsList from '../../components/news/newslist';

import logo from './images/dota2.png';
import './styles/App.css';

class App extends Component {
	componentDidMount(){
		const { dispatch } = this.props;
		dispatch(action.fetchNewsList());
	}

	render() {
		const {loadingShow, news, requestError} = this.props;
		return (
			<div className="App">
				<div className="App-header">
					<img src={logo}
					     className="App-logo" alt="logo"/>
					{/*<img src={logo} srcSet="two.png 2x, three.png 3x, four.png 4x"
					     className="App-logo" alt="logo"/>*/}
				</div>
				<NewsList newslist={news}/>
				<Loading show={loadingShow} error={requestError}/>
			</div>
		);
	}
}


const mapStateToProps = (state) => {
	return {
		loadingShow: state.globalReducer.loadingShow,
		news: state.newsReducer.news,
		requestError: state.globalReducer.requestError
	};
};

const mapDispatchToProps = (dispatch) => ({
	dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

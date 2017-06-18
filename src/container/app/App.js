import React, { Component } from 'react';
import { connect } from "react-redux";
import * as action from '../../action';

import Loading from '../../components/public/loading/index';
import NewsList from '../../components/news/newslist';

import logo from './images/dota2.png';
import './styles/App.css';

class App extends Component {

	render() {
		const {loadingShow, requestError} = this.props;
		return (
			<div className="App">
				{this.props.children}
				<Loading show={loadingShow} error={requestError}/>
			</div>
		);
	}
}


const mapStateToProps = (state) => {
	return {
		loadingShow: state.globalReducer.loadingShow,
		requestError: state.globalReducer.requestError
	};
};

const mapDispatchToProps = (dispatch) => ({
	dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router';

import Loading from '../../components/public/loading/index';

import './styles/App.css';

class App extends Component {

	render() {
		const {loadingShow, requestError} = this.props;
		return (
			<div className="App">
				<div>{this.props.children}</div>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

/**
 * Created by shaolong on 2017/6/18.
 */
import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router';

import NewsDetail from '../../components/detail';

class DetailContainer extends Component {
	render() {
		console.log('detail container')
		return <NewsDetail/>
	}
}

// const mapStateToProps = (state) => {
// 	return {
// 		news: state.newsReducer.news
// 	};
// };
//
// const mapDispatchToProps = (dispatch) => ({
// 	dispatch
// });


export default withRouter(connect()(DetailContainer));
/**
 * Created by shaolong on 2017/6/18.
 */
import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router';

import { fetchNewsDetail } from '../../action';

import NewsDetail from '../../components/detail';

class DetailContainer extends Component {
	componentDidMount() {
		const { dispatch, match, title, content } = this.props;
		console.log('match.params.id', match.params.id);


		const news_id = match.params.id;
		dispatch(fetchNewsDetail(news_id));
	}
	render() {
		const { title, content } = this.props;
		return <NewsDetail title={title} content={content} />
	}
}

const mapStateToProps = (state) => {
	return {
		title: state.detailReducer.title,
		content: state.detailReducer.content
	};
};

const mapDispatchToProps = (dispatch) => ({
	dispatch
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DetailContainer));
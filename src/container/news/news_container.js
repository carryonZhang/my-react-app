/**
 * Created by shaolong on 2017/6/18.
 */
import React, {Component} from 'react';
import { connect } from "react-redux";

import NewsList from '../../components/news/newslist';
import * as action from '../../action';

class NewsContainer extends Component {
	componentDidMount() {
		const {dispatch} = this.props;
		dispatch(action.fetchNewsList());
	}

	render() {
		const {news} = this.props;
		return (
			<NewsList newslist={news}/>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		news: state.newsReducer.news
	};
};

const mapDispatchToProps = (dispatch) => ({
	dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer);
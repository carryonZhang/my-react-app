/**
 * Created by shaolong on 2017/6/13.
 */
import {LOADING_SHOW, RECIEVE_NEWS, REQUEST_ERROR, REQUEST_NEWS_DETAIL} from '../constants';
import * as api from '../api';

export const showLoading = (bool) => ({
	type: LOADING_SHOW,
	show: bool
})

export const requestError = (bool) => ({
	type: REQUEST_ERROR,
	error: bool
})

export const recieveNews = (news) => ({
		type: RECIEVE_NEWS,
		news: news
	}
)

export const recieveNewsDetail = (detail) => ({
	type: REQUEST_NEWS_DETAIL,
	...detail
})

export const fetchNewsList = () => {
	return (dispatch) => {
		dispatch(showLoading(true));
		api.fetchNews().then((response) => {
			console.log('action中拉取的新闻列表', response);
			if(response.status === 'success') {
				let news = JSON.parse(response.data);
				dispatch(recieveNews(news));
				dispatch(showLoading(false));
			}
		}).catch((err) => {
			console.log('action中的err', err)
			dispatch(requestError(true))
		})
	}
}

export const fetchNewsDetail = (id) => {
	return (dispatch) => {
		dispatch(showLoading(true));
		api.fetchNewsDetail(id).then((response) => {
			// console.log('action中拉取的新闻详情', response);
			if(response.status === 'success') {
				let detail = JSON.parse(response.detail);
				console.log('action中parse后的新闻详情', detail);
				dispatch(recieveNewsDetail(detail));
				dispatch(showLoading(false));
			}

		}).catch((err) => {
			console.log('action中的err', err)
			dispatch(requestError(true))
		})
	}
}


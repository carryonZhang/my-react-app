/**
 * Created by shaolong on 2017/6/13.
 */
import {LOADING_SHOW, RECIEVE_NEWS, REQUEST_ERROR} from '../constants';
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

export const fetchNewsList = () => {
	return (dispatch) => {
		dispatch(showLoading(true));
		api.fetchNews().then((response) => {
			console.log('action中的拉取新闻的响应', response);
			dispatch(recieveNews(response));
			dispatch(showLoading(false));
		}).catch((err) => {
			console.log('action中的err', err)
			dispatch(requestError(true))
		})
	}
}


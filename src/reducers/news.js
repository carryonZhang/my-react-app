/**
 * Created by shaolong on 2017/6/14.
 */
import {RECIEVE_NEWS} from '../constants';

let news = [];

const newsReducer = (state = {news: news}, action) => {
	switch (action.type) {
		case RECIEVE_NEWS:
			return {
				...state,
				news: action.news
			}
		default:
			return state;
	}
}
export default newsReducer;
/**
 * Created by shaolong on 2017/6/20.
 */
import { REQUEST_NEWS_DETAIL } from '../constants';

let init = {
	title: '',
	content: ''
}

const detailReducer = (state = init, action) => {
	switch (action.type){
		case REQUEST_NEWS_DETAIL: return {...state, title: action.title, content: action.content};
		default: return state;
	}
}

export default detailReducer;
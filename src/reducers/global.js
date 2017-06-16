/**
 * Created by shaolong on 2017/6/14.
 */

import { LOADING_SHOW, REQUEST_ERROR } from '../constants';

const initialState = {
	loadingShow: false,
	requestError: false
}

const globalReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOADING_SHOW:
			return  { ...state, loadingShow: action.show }
		case REQUEST_ERROR:
			return { ...state, requestError: action.error }
		default:
			// console.log('global中的state', state)
			return state;
	}
}

export default globalReducer;
/**
 * Created by shaolong on 2017/6/13.
 */
import { combineReducers } from 'redux';
import globalReducer from './global';
import newsReducer from './news';

export default combineReducers({
		globalReducer,
		newsReducer
	}
)

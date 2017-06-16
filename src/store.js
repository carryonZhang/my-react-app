/**
 * Created by shaolong on 2017/6/13.
 */
import thunkMiddleware from 'redux-thunk';
import { logger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';

const configureStore = (initialState = {}) => {

	const middleware = [
		thunkMiddleware,
		logger
	];

	// const store = createStore(
	// 	rootReducer,
	// 	initialState,
	// 	compose(
	// 		applyMiddleware(...middleware)
	// 	)
	// );
	let createStoreWidthMiddleware = applyMiddleware(...middleware)(createStore);
	const store = createStoreWidthMiddleware(rootReducer,initialState);

	return store;
};


export default configureStore;
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './components/app/App';
// import registerServiceWorker from './registerServiceWorker';
// import './public.css';
//
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();


import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import configureStore from './store';
import Routers from './routers';

import './public/public.css';
import './index.css';

const initialState = {};
const store = configureStore(initialState);

render(
	<Provider store={store}>
		<Routers />
	</Provider>,
	document.getElementById('root')
);

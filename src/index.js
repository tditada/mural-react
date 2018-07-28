import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';

import Mural from './Mural';
import './body.css';
// import registerServiceWorker from './registerServiceWorker';
import { changeNotes } from './reducers'

const logger = createLogger()
const rootReducers = combineReducers({changeNotes})
const store = createStore(rootReducers, applyMiddleware(logger))

ReactDOM.render( 
	<Provider store={store}>
		< Mural / > 
	 </Provider>,
	document.getElementById('root')
);
//registerServiceWorker();
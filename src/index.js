import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import Mural from './containers/mural/Mural';
import './index.css';
import { changeNotes } from './reducers/reducers'
import ErrorBoundry from './components/ErrorBoundry';

const rootReducers = combineReducers({changeNotes})
const store = createStore(rootReducers)

ReactDOM.render( 
	<Provider store={store}>
		<ErrorBoundry>
			< Mural / > 
		</ErrorBoundry>
	 </Provider>,
	document.getElementById('root')
);
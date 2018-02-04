import React from 'react';
import ReactDOM from 'react-dom';
import './styles/App.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';
import getData from './actions/getData';

const store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(() => console.log(store.getState()));


store.dispatch(getData());
 
ReactDOM.render((
	<Provider store={store}>
		<App />
	</Provider>
	), document.getElementById('root'));
registerServiceWorker();

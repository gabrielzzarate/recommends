import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
//import './index.css';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { unregister } from './registerServiceWorker';

import reducers from './reducers';
import App from './components/App';

unregister();

const persistConfig = {
	key: 'root',
	storage: storage
};

const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(persistedReducer, {}, applyMiddleware(reduxThunk));
let persistor = persistStore(store);

ReactDOM.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<App />
		</PersistGate>
	</Provider>,
	document.getElementById('root')
);

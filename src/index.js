import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import * as firebase from 'firebase';
import configureStore from './store';
import {getAllProducts} from './actions/index';
import {FIREBASE_CONFIG} from './constants/firebaseConfig';


// if (!firebase.apps.length) {
    firebase.initializeApp(FIREBASE_CONFIG)
// }

const store = configureStore();
// store.dispatch(getAllProducts());
ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, document.getElementById('root'));
registerServiceWorker();

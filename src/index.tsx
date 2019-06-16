import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import store from './store/App.Store';


const AppWithProvider = (
    <Provider store={store}>
        <App/>
    </Provider>
)


ReactDOM.render(AppWithProvider, document.getElementById('root'));

serviceWorker.unregister();

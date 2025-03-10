import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createStore } from 'redux';
import { Provider } from 'react-redux';
import reminders from './reducers';
import './index.css'


const store = createStore(reminders)

ReactDom.render(
    <Provider store = {store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers'
import { Provider } from 'react-redux'
import 'babel-polyfill';

import './index.css'

const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger())
}

const store = createStore(reducer, applyMiddleware(...middleware));

ReactDOM.render(
    <Provider store={store}>
            <App />
    </Provider>,
    document.getElementById('root')
)
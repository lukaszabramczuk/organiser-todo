import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';

import App from './App'
import store from './store'

import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
    <Provider store={store}>
            <App title="ToDo Organiser"/>
    </Provider>,
    document.getElementById('root')
)
registerServiceWorker()

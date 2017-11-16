import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';

import store from './store'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
            <App title="ToDo Organiser"/>
    </Provider>,
    document.getElementById('root')
)
registerServiceWorker()

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import App from './components/App/App';
import store from './Redux/redux-store';
import { Provider } from 'react-redux';


ReactDOM.render(
    <Router>
        <Provider store={store} >
            <App />
        </Provider>
    </Router>,
    document.getElementById('root')
);
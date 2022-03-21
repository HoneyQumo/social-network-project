import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import App from './components/App/App';
import state from './Redux/state';


ReactDOM.render(

    <Router>
        <App state={state} />
    </Router>,
    document.getElementById('root')
);
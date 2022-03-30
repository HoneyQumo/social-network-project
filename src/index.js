import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import App from './components/App/App';
import store from './Redux/store';

export const renderEntireTree = (state) => {
    ReactDOM.render(
        <Router>
            <App
                state={state}
                dispatch={store.dispatch.bind(store)}
            />
        </Router>,
        document.getElementById('root')
    );
};

renderEntireTree(store.getState());

store.subscribe(renderEntireTree);
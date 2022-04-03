import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import App from './components/App/App';
import store from './Redux/redux-store';
import Context from './Context/Context';

export const renderEntireTree = (state) => {
    ReactDOM.render(
        <Router>
            <Context.Provider value={store} >
                <App
                    state={state}
                    dispatch={store.dispatch.bind(store)}
                />
            </Context.Provider>
        </Router>,
        document.getElementById('root')
    );
};

renderEntireTree(store.getState());

store.subscribe(() => {
    const state = store.getState();
    renderEntireTree(state);
}); 
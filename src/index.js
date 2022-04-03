import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import App from './components/App/App';
import store from './Redux/redux-store';
import { StoreProvider } from './Context/Context';

export const renderEntireTree = () => {
    ReactDOM.render(
        <Router>
            <StoreProvider value={store} >
                <App />
            </StoreProvider>
        </Router>,
        document.getElementById('root')
    );
};

renderEntireTree(store.getState());

store.subscribe(() => {
    const state = store.getState();
    renderEntireTree(state);
}); 
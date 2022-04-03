import React from 'react';

import './App.css';
import Content from '../Content/Content';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';

const App = () => {

    return (
        <div className='container'>
            <Header />
            <Navbar />
            <Content />
        </div>
    );
};

export default App;
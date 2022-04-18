import React from 'react';

import './App.css';
import Content from '../Content/Content';
import Navbar from '../Navbar/Navbar';
import HeaderContainer from '../Header/HeaderContainer';

const App = () => {

    return (
        <div className='container'>
            <HeaderContainer />
            <Navbar />
            <Content />
        </div>
    );
};

export default App;
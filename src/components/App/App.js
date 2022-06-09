import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import Content from '../Content/Content';
import Navbar from '../Navbar/Navbar';
import HeaderContainer from '../Header/HeaderContainer';
import { initializeApp } from '../../reducers/app-reducer';
import Loader from '../Loader/Loader';

class App extends Component {

    componentDidMount() {
        this.props.initializeApp();
    };

    render() {

        if (!this.props.initialized) {
            return <Loader />
        }

        return (
            <div className='container'>
                <HeaderContainer />
                <Navbar />
                <Content />
            </div>
        );
    };
};

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

export default connect(mapStateToProps, { initializeApp })(App);
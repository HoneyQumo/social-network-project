import React, { Component } from 'react';
import { connect } from 'react-redux';

import { authorization } from '../../reducers/auth-reducer';
import Header from './Header';

class HeaderContainer extends Component {
    componentDidMount() {
        this.props.authorization();
    };

    render() {
        return (
            <Header {...this.props} />
        );
    };
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    id: state.auth.id
});

const mapDispatchToProps = { authorization };

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
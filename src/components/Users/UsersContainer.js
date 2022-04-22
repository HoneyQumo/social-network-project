import React, { Component } from 'react'
import { connect } from 'react-redux';

import { toggleFollow, setCurrentPage, buttonIsPressed, getUsers, getUsersOnCurrentPage, follow, unfollow } from '../../reducers/users-reducer';
import Users from './Users';
import Loader from '../Loader/Loader';


class UsersContainer extends Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    };

    onPageChenged = (pageNumber) => {
        this.props.getUsersOnCurrentPage(pageNumber, this.props.pageSize);
    };

    render() {
        const { users, totalUsersCount, pageSize,
            currentPage, isFetching, isPressedButton,
            follow, unfollow } = this.props;

        return (
            <>
                {isFetching ? <Loader /> : <Users
                    users={users}
                    totalUsersCount={totalUsersCount}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChenged={this.onPageChenged}
                    isPressedButton={isPressedButton}
                    follow={follow}
                    unfollow={unfollow}
                />}
            </>
        );
    };
};

const mapStateToProps = ({ usersPage: { users, pageSize, totalUsersCount, currentPage, isFetching, isPressedButton } }) => ({
    users,
    pageSize,
    totalUsersCount,
    currentPage,
    isFetching,
    isPressedButton
});

const mapDispatchToProps = {
    toggleFollow, setCurrentPage,
    buttonIsPressed, getUsers,
    getUsersOnCurrentPage,
    follow, unfollow
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
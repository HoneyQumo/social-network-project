import React, { Component } from 'react'
import { connect } from 'react-redux';

import { toggleFollow, setCurrentPage, buttonIsPressed, requestUsers, getUsersOnCurrentPage, follow, unfollow } from '../../reducers/users-reducer';
import Users from './Users';
import Loader from '../Loader/Loader';
import { getCurrentPage, getIsFetching, getIsPressedButton, getPageSize, getTotalUsersCount, getUsers } from '../../selectors/users-selectors';


class UsersContainer extends Component {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
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

// const mapStateToProps = (state) => ({
//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     currentPage: state.usersPage.currentPage,
//     isFetching: state.usersPage.isFetching,
//     isPressedButton: state.usersPage.isPressedButton
// });

const mapStateToProps = (state) => ({
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    isPressedButton: getIsPressedButton(state)
});

const mapDispatchToProps = {
    toggleFollow, setCurrentPage,
    buttonIsPressed, requestUsers,
    getUsersOnCurrentPage,
    follow, unfollow
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
import React, { Component } from 'react'
import { connect } from 'react-redux';

import { toggleFollow, setUsers, setCurrentPage, setUsersTotalCount, toggleIsFetching } from '../../reducers/users-reducer';
import Users from './Users';
import Loader from '../Loader/Loader';
import { getUsers } from '../../api/api';


class UsersContainer extends Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);

        getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setUsers(data.items);
            this.props.setUsersTotalCount(data.totalCount);
            this.props.toggleIsFetching(false);
        });

    };

    onPageChenged = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);

        getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.setUsers(data.items);
            this.props.toggleIsFetching(false);
        });
    };

    render() {
        const { users, toggleFollow, totalUsersCount, pageSize, currentPage, isFetching } = this.props;

        return (
            <>
                {isFetching ? <Loader /> : <Users
                    users={users}
                    toggleFollow={toggleFollow}
                    totalUsersCount={totalUsersCount}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChenged={this.onPageChenged}
                />}
            </>
        );
    };
};

const mapStateToProps = ({ usersPage: { users, pageSize, totalUsersCount, currentPage, isFetching } }) => ({
    users,
    pageSize,
    totalUsersCount,
    currentPage,
    isFetching
});

const mapDispatchToProps = { toggleFollow, setUsers, setCurrentPage, setUsersTotalCount, toggleIsFetching };

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
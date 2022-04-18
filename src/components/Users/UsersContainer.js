import React, { Component } from 'react'
import { connect } from 'react-redux';
import axios from 'axios';

import { toggleFollow, setUsers, setCurrentPage, setUsersTotalCount, toggleIsFetching } from '../../reducers/users-reducer';
import Users from './Users';
import Loader from '../Loader/Loader';


class UsersContainer extends Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items);
                this.props.setUsersTotalCount(res.data.totalCount);
                this.props.toggleIsFetching(false);
            });

    };

    onPageChenged = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);

        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items);
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
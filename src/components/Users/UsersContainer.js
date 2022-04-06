import { connect } from 'react-redux';
import { toggleFollowAC, setUsersAC, unfollowAC } from '../../reducers/users-reducer';
import Users from './Users';


const mapStateToProps = (state) => ({
    users: state.usersPage.users
});

const mapDispatchToProps = (dispatch) => {
    return {
        toggleFollow: (userId) => {
            dispatch(toggleFollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
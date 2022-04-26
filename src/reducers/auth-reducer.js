import { authAPI } from "../api/api";


const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    isFetching: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        default:
            return state;
    };
};

//>-----------------ACTION CREATOR-----------------<
export const setAuthUserData = (id, login, email) => ({ type: SET_USER_DATA, data: { id, login, email } });


//>-----------------THUNK-----------------<
export const authorization = () => (dispatch) => {
    authAPI.me()
        .then(res => {
            if (res.data.resultCode === 0) {
                const { id, login, email } = res.data.data;
                dispatch(setAuthUserData(id, login, email));
            }
        });
};

export default authReducer;
import { authAPI } from '../api/api';

const SET_USER_DATA = 'auth/SET_USER_DATA';

const initialState = {
	id: null,
	login: null,
	email: null,
	isAuth: false,
	isFetching: false,
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				...action.data,
			};

		default:
			return state;
	}
};

//>-----------------ACTION CREATOR-----------------<
export const setAuthUserData = (id, login, email, isAuth) => ({
	type: SET_USER_DATA,
	data: { id, login, email, isAuth },
});

//>-----------------THUNK-----------------<
export const authorization = () => async (dispatch) => {
	const response = await authAPI.me();

	if (response.data.resultCode === 0) {
		const { id, login, email } = response.data.data;
		dispatch(setAuthUserData(id, login, email, true));
	}
};

export const login = (email, password, rememberMe, setStatus) => async (dispatch) => {
	const response = await authAPI.login(email, password, rememberMe);

	if (response.data.resultCode === 0) {
		dispatch(authorization());
	} else {
		setStatus(response.data.messages);
	}
};

export const logout = () => async (dispatch) => {
	const response = await authAPI.logout();

	if (response.data.resultCode === 0) {
		dispatch(setAuthUserData(null, null, null, false));
	}
};

export default authReducer;

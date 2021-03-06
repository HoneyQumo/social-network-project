import { profileAPI, usersAPI } from '../api/api';

const ADD_POST = 'ADD_POST';
const SET_USET_PROFILE = 'SET_USET_PROFILE';
const SET_STATUS = 'SET_STATUS';

const initialState = {
	postsData: [
		{ id: 1, text: 'Это мой первый пост', likeCount: 11 },
		{ id: 2, text: 'Это мой второй пост', likeCount: 98 },
		{ id: 3, text: 'Это мой 3 пост', likeCount: 3 },
	],
	newPostText: 'honeyqumo',
	profile: null,
	status: '',
};

let maxId = 4;

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			const newPost = {
				id: maxId++,
				text: action.newPostText,
				likeCount: 0,
			};
			return {
				...state,
				newPostText: '',
				postsData: [...state.postsData, newPost],
			};
		}

		case SET_USET_PROFILE:
			return {
				...state,
				profile: action.profile,
			};

		case SET_STATUS:
			return {
				...state,
				status: action.status,
			};

		default:
			return state;
	}
};

// >-----------------ACTION CREATOR -----------------<
export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });

export const setUserProfile = (profile) => ({ type: SET_USET_PROFILE, profile });

export const setStatus = (status) => ({ type: SET_STATUS, status });

// >-----------------THUNK-----------------<
export const getUserProfile = (userId) => async (dispatch) => {
	const response = await usersAPI.getProfile(userId);
	dispatch(setUserProfile(response.data));
};

export const getStatus = (userId) => async (dispatch) => {
	const response = await profileAPI.getStatus(userId);
	dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
	const response = await profileAPI.updateStatus(status);
	if (response.data.resultCode === 0) {
		dispatch(setStatus(status));
	}
};

export default profileReducer;

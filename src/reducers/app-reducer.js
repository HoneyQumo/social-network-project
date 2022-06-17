import { authorization } from './auth-reducer';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

const initialState = {
	initialized: false,
};

const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case INITIALIZED_SUCCESS:
			return {
				...state,
				initialized: true,
			};

		default:
			return state;
	}
};

//>-----------------ACTION CREATOR-----------------<
export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS });

//>---------------------THUNK----------------------<
export const initializeApp = () => (dispatch) => {
	const promise = dispatch(authorization());

	promise.then(() => {
		dispatch(initializedSuccess());
	});
};

export default appReducer;

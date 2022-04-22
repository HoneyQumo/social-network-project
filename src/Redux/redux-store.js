import { applyMiddleware, combineReducers, createStore } from "redux";
import ThunkMiddleware from "redux-thunk";

import authReducer from "../reducers/auth-reducer";
import messagesReducer from "../reducers/messgaes-reducer";
import profileReducer from "../reducers/profile-reducer";
import usersReducer from "../reducers/users-reducer";


const reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messagesReducer,
    usersPage: usersReducer,
    auth: authReducer
});

const store = createStore(reducers, applyMiddleware(ThunkMiddleware));

window.store = store;

export default store;
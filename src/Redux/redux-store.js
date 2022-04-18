import { combineReducers, createStore } from "redux";
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

const store = createStore(reducers);

window.store = store;

export default store;
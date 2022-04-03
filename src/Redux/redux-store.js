import { combineReducers, createStore } from "redux";
import messagesReducer from "../reducers/messgaes-reducer";
import profileReducer from "../reducers/profile-reducer";


const reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messagesReducer
});

const store = createStore(reducers);

export default store;
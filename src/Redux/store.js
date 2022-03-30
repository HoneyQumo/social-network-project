import messagesReducer from "../reducers/messgaes-reducer";
import profileReducer from "../reducers/profile-reducer";


const store = {
    _state: {
        profilePage: {
            postsData: [
                { id: 1, text: 'Это мой первый пост', likeCount: 11 },
                { id: 2, text: 'Это мой второй пост', likeCount: 98 },
                { id: 3, text: 'Это мой 3 пост', likeCount: 3 },
            ],
            newPostText: 'honeyqumo'
        },
        messagePage: {
            messagesUsersData: [
                { id: 1, name: 'Никита', imageUrl: 'graphic-design-xnimrodx-lineal-color-xnimrodx.png' },
                { id: 2, name: 'Елена', imageUrl: 'esport-xnimrodx-lineal-color-xnimrodx-2.png' },
                { id: 3, name: 'Иван', imageUrl: 'retirement-xnimrodx-lineal-color-xnimrodx-2.png' },
                { id: 4, name: 'Дмитрий', imageUrl: 'fitness-and-gym-xnimrodx-lineal-color-xnimrodx-2.png' },
                { id: 5, name: 'Ирина', imageUrl: 'encryption-xnimrodx-lineal-color-xnimrodx.png' },
            ],
            messagesChatData: [
                { id: 1, msg: 'Hello' },
                { id: 2, msg: 'What is you name?' },
                { id: 3, msg: 'How are you?' },
            ],
            newMessageBody: '',
        }
    },

    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log('State was changed');
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagePage = messagesReducer(this._state.messagePage, action);

        this._callSubscriber(this._state);
    },
};

window.store = store;

export default store;
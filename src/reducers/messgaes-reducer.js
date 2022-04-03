const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

const initialState = {
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
};

const messagesReducer = (state = initialState, action) => {

    switch (action.type) {

        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.msg;
            return state;

        case SEND_MESSAGE:
            const text = state.newMessageBody;
            state.newMessageBody = '';
            state.messagesChatData.push({ id: 4, msg: text });
            return state;

        default:
            return state;
    };
};

export const updateNewMessageBodyActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        msg: text
    }
};

export const sendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE
    }
};

export default messagesReducer;
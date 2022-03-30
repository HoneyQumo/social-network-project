const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

const messagesReducer = (state, action) => {

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
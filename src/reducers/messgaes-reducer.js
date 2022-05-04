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
};

let maxId = 4;

const messagesReducer = (state = initialState, action) => {

    switch (action.type) {

        case SEND_MESSAGE:
            return {
                ...state,
                messagesChatData: [...state.messagesChatData, { id: maxId++, msg: action.newMessage }]
            };

        default:
            return state;
    };
};

export const sendMessageActionCreator = (newMessage) => {
    return {
        type: SEND_MESSAGE,
        newMessage
    }
};

export default messagesReducer;
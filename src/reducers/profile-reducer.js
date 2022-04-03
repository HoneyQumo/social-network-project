const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const initialState = {
    postsData: [
        { id: 1, text: 'Это мой первый пост', likeCount: 11 },
        { id: 2, text: 'Это мой второй пост', likeCount: 98 },
        { id: 3, text: 'Это мой 3 пост', likeCount: 3 },
    ],
    newPostText: 'honeyqumo'
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST:
            const newPost = {
                id: 4,
                text: state.newPostText,
                likeCount: 0
            };
            state.postsData.push(newPost);
            state.newPostText = '';
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;

        default:
            return state;
    };
};

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    };
};

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    };
};

export default profileReducer;
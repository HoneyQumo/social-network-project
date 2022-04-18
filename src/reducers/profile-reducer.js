const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USET_PROFILE = 'SET_USET_PROFILE';

const initialState = {
    postsData: [
        { id: 1, text: 'Это мой первый пост', likeCount: 11 },
        { id: 2, text: 'Это мой второй пост', likeCount: 98 },
        { id: 3, text: 'Это мой 3 пост', likeCount: 3 },
    ],
    newPostText: 'honeyqumo',
    profile: null
};

let maxId = 4;



const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST: {
            const newPost = {
                id: maxId++,
                text: state.newPostText,
                likeCount: 0
            };
            return {
                ...state,
                newPostText: '',
                postsData: [...state.postsData, newPost]
            };
        };

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };

        case SET_USET_PROFILE:
            return {
                ...state,
                profile: action.profile
            };

        default:
            return state;
    };
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export const setUserProfile = (profile) => ({ type: SET_USET_PROFILE, profile });

export default profileReducer;
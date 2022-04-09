const TOGGLE_FOLLOW = "TOGGLE_FOLLOW";
const SET_USERS = 'SET_USERS';

// const IMAGE_URL = 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/';

const initialState = {
    users: [
        // { id: 1, imageUrl: `${IMAGE_URL}500.jpg`, fullName: 'Никита Славин', followed: false, status: 'Я разработчик', location: { city: 'Тверь', country: 'Россия' } },
        // { id: 2, imageUrl: `${IMAGE_URL}783.jpg`, fullName: 'Елена Дмитриева', followed: true, status: 'Nestle-маркетолог', location: { city: 'Москва', country: 'Россия' } },
        // { id: 3, imageUrl: `${IMAGE_URL}1205.jpg`, fullName: 'Дмитрий Ерохин', followed: false, status: 'йоу йоу', location: { city: 'Минск', country: 'Беларусь' } },
        // { id: 4, imageUrl: `${IMAGE_URL}409.jpg`, fullName: 'Nigel Raynor', followed: false, status: 'Direct Integration Orchestrator', location: { city: 'South Hilariostad', country: 'Bhutan' } },
    ],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {

        case TOGGLE_FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {
                            ...user,
                            followed: !user.followed
                        };
                    }
                    return user;
                })
            };

        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            };

        default:
            return state;
    }
};

export const toggleFollowAC = (userId) => ({ type: TOGGLE_FOLLOW, userId });

export const setUsersAC = (users) => ({ type: SET_USERS, users });


export default usersReducer;

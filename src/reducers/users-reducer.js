const TOGGLE_FOLLOW = "TOGGLE_FOLLOW";
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

// const IMAGE_URL = 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/';

const initialState = {
    users: [
        // { id: 1, imageUrl: `${IMAGE_URL}500.jpg`, fullName: 'Никита Славин', followed: false, status: 'Я разработчик', location: { city: 'Тверь', country: 'Россия' } },
        // { id: 2, imageUrl: `${IMAGE_URL}783.jpg`, fullName: 'Елена Дмитриева', followed: true, status: 'Nestle-маркетолог', location: { city: 'Москва', country: 'Россия' } },
        // { id: 3, imageUrl: `${IMAGE_URL}1205.jpg`, fullName: 'Дмитрий Ерохин', followed: false, status: 'йоу йоу', location: { city: 'Минск', country: 'Беларусь' } },
        // { id: 4, imageUrl: `${IMAGE_URL}409.jpg`, fullName: 'Nigel Raynor', followed: false, status: 'Direct Integration Orchestrator', location: { city: 'South Hilariostad', country: 'Bhutan' } },
    ],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
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
                users: action.users
            };

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };

        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.count
            };

        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };

        default:
            return state;
    }
};


// ACTION CREATORS

export const toggleFollow = (userId) => ({ type: TOGGLE_FOLLOW, userId });

export const setUsers = (users) => ({ type: SET_USERS, users });

export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });

export const setUsersTotalCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount });

export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export default usersReducer;

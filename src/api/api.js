import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: { "API-KEY": "ac73d958-5928-4823-a571-86a1cb2e91d0" },
});

export const getUsers = (currentPage = 1, pageSize = 10) => {
    return instance
        .get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data;
        })
};


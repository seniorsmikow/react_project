import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": "be25bc47-78e9-4634-b668-90794e8b62b9"},
});


export const getUsers = (currentPage, pageSize) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
};

export const getElseUsers = (currentPage, pageSize) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
};

export const getProfileApi = (userId) => {
    return instance.get(`profile/` + userId);
};

export const getStatus = (userId) => {
    return instance.get(`profile/status/` + userId);
};

export const updateStatus = (status) => {
    return instance.put(`profile/status`, {status});
};

export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe});
    },
    logout() {
        return instance.delete(`auth/login`);
    },

};

export const usersAPI = {
    followApi(userId) {
        return instance.post(`follow/` + userId);
    },
    unfollowApi(userId) {
        return instance.delete(`follow/` + userId);
    }
}

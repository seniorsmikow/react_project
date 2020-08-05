import {  getProfileApi, getStatus, updateStatus } from '../Api/api';

const GET_PROFILE = 'GET_PROFILE';
const GET_USER_STATUS = 'GET_USER_STATUS';

const initialState = {
    profile: null,
    status: "",
};

export const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_PROFILE:
            return {
                ...state, profile: action.profile
            };
        case GET_USER_STATUS:
            return {
                ...state, status: action.status
            };
        default:
            return state;
    }
};

export const getProfile = (profile) => {
    return {
        type: GET_PROFILE,
        profile
    };
};

export const getUserStatus = (status) => {
    return {
        type: GET_USER_STATUS,
        status
    };
};



export const thunkCreatorGetProfile = (userId) => {
    return (dispatch) => {
        getProfileApi(userId)
        .then(response => {
            dispatch(getProfile(response.data));
        });
    };
};

export const getUStatus = (userId) => {
    return (dispatch) => {
        getStatus(userId)
        .then(response => {
            dispatch(getUserStatus(response.data));
        });
    };
};

export const updateUStatus = (status) => {
    return (dispatch) => {
        updateStatus(status)
        .then(response => {
            if(response.data.resultCode === 0) {
                dispatch(getUserStatus(status));
            }
        });
    };
};

export default profileReducer;
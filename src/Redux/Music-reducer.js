import { musicAPI } from '../Api/musicAPI';

const CHANGE_MUSIC = 'CHANGE-MUSIC';
const UPDATE_MUSIC = 'UPDATE-MUSIC';
const LOAD_MUSIC = 'music/LOAD_MUSIC';

let initialState = {
        music: [
            { song: "One" },
            { song: "Two" },
            { song: "Free" },
            { song: "Four" }
        ],
        newMusicTitle: "",
        loadingMusic: [],
};

const musicReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_MUSIC:
        {
            let copyState = {...state};
            copyState.newMusicTitle = action.title;
            return copyState;
        }
        case UPDATE_MUSIC:
        {
            let newSong = {
                song: state.newMusicTitle
            };
            let copyState = {...state};
            copyState.music = [...state.music];
            copyState.music.push(newSong);
            copyState.newMusicTitle = '';
            return copyState;
        }
        case LOAD_MUSIC:
        return {
            ...state, loadingMusic: action.payload
        };
        default:
            return state;
    }
};

export const writeSomething = (title) => {
    return {
        type: CHANGE_MUSIC,
        title: title,
    };
};

export const createNewSong = () => {
    return {
        type: UPDATE_MUSIC,
    };
};

export const loadingMusic = (payload) => {
    return {
        type: LOAD_MUSIC,
        payload
    };
};

export const loadingMusicThunk = () => async dispatch => {
    let response = await musicAPI.getAlbumInfo();

    dispatch(loadingMusic(response));

};


export default musicReducer;
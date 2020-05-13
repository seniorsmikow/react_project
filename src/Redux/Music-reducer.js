const CHANGE_MUSIC = 'CHANGE-MUSIC';
const UPDATE_MUSIC = 'UPDATE-MUSIC';

const musicReducer = (state, action) => {
    switch(action.type) {
        case CHANGE_MUSIC:
            state.newMusicTitle = action.title;
            return state;
        case UPDATE_MUSIC:
            let newSong = {
                song: state.newMusicTitle
            };
            state.music.push(newSong);
            state.newMusicTitle = '';
            return state;
        default:
            return state;
    }
};

export default musicReducer;
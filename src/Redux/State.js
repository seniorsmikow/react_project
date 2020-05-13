import  postsReducer  from './Posts-reducer';
import  musicReducer  from './Music-reducer';

export  let store = {

    _state: {
        postsPage: {
            posts: [
                { text: "one", like: "23" },
                { text: "two", like: "24" },
                { text: "three", like: "67" },
                { text: "four", like: "89" },
                { text: "five", like: "34"}
            ],
            inputText: "", 
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Igor' },
                { id: 2, name: 'Egor' },
                { id: 3, name: 'Nina' },
                { id: 4, name: 'Georgiy' },
                { id: 5, name: 'Ivan' },
            ],
            messages: [
                { text: "Wow!" },
                { text: "Great" },
                { text: "Sorry" },
                { text: "Ok" }
            ]
        },
        musicPage: {
            music: [
                { song: "One" },
                { song: "Two" },
                { song: "Free" },
                { song: "Four" }
            ],
            newMusicTitle: ""
        },
    },

    getState() {
        return this._state;
    },

    renderAll() {
        console.log("render");
    },

    updateState(observer) {
        this.renderAll = observer;
    },

    dispatch(action) {
        this._state.postsPage = postsReducer(this._state.postsPage, action);
        this._state.musicPage = musicReducer(this._state.musicPage, action);

        this.renderAll(this._state);
    },

};

// export let updateTitleCreatorAction = () => {
//     return {
//         type: CHANGE_MUSIC
//     };
// };

// export let changeTitleCreatorAction = (title) => {
//     return {
//         type: UPDATE_MUSIC,
//         songTitle: title,
//     };
// };
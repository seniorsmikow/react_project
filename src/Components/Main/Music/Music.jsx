import React from 'react';
import classes from './Music.module.css';
import Song from './Song/Song';
//import { updateTitleCreatorAction, changeTitleCreatorAction}  from '../../../Redux/State';
let CHANGE_MUSIC = 'CHANGE-MUSIC';
let UPDATE_MUSIC = 'UPDATE-MUSIC';


let writeSomething = (title) => {
    return {
        type: CHANGE_MUSIC,
        title: title,
    };
};

let createNewSong = () => {
    return {
        type: UPDATE_MUSIC,
    };
};


const Music = (props) => {
    debugger;

    let songs = props.state.musicPage.music.map( el => <Song song={el.song} /> );
    let elemMusic = React.createRef();

    let changeSong = () => {
        props.dispatch(createNewSong());
    };
    
    let updateSong = () => {
        let title = elemMusic.current.value;
        props.dispatch(writeSomething(title));
    };

    return (
        <div className={classes.Music}>
            {songs}
            <div>
                <div>
                    <textarea onChange={updateSong} value={props.newText} ref={elemMusic} placeholder="Введите название"></textarea>
                </div>
                <div>
                    <button onClick={changeSong}>Изменить</button>
                </div>
            </div>
        </div>
    );
};

export default Music;
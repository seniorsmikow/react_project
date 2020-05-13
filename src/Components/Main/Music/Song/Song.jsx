import React from 'react';
import classes from './Song.module.css';

const Song = (props) => {

    return (
        <div className={classes.Song}>
            {props.song}
        </div>
    );
};

export default Song;
import React from 'react';
import classes from './Friend.module.css';

const Friend = (props) => {

    return (
        <div className={classes.Friend}>
            <img src={props.src} alt={props.alt}/>
            {props.name}
        </div>
    );
};

export default Friend;
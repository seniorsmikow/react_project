import React from 'react';
import classes from './MessageItem.module.css';

const MessageItem = (props) => {
    
    return (
        <div className={classes.MessageItem}>
            {props.text}
        </div>
    );
};

export default MessageItem;
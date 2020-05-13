import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './DialogItem.module.css';

const DialogItem = (props) => {
    debugger;
    let path = "/dialogs/" + props.id;
    return (
        <div className={classes.DialogItem}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
};

export default DialogItem;
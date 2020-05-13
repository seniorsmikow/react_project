import React from 'react';
import classes from './Dialogs.module.css';
import TextInput from './TextInput/TextInput';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';

const Dialogs = (props) => {

    debugger;

    let newMessages = props.messages.map( el => <MessageItem text={el.text} /> );
    
    let newDialogData = props.dialogs.map( el => <DialogItem id={el.id} name={el.name} /> );

    return (
        <div>
            <div className={classes.Dialogs}>
                <TextInput dispatch={props.dispatch}/>
            </div>
            <div className={classes.MainWrapper}>
                <div className={classes.Dialogs}>
                    { newDialogData }
                </div>
                <div className={classes.Dialogs}>
                    { newMessages }
                </div>
            </div>
        </div>
        
    )
};

export default Dialogs;
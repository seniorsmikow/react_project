import React from 'react';
import classes from './TextInput.module.css';

let actionCreatorChangeMessage = (text) => {
    return {
        type: "CHANGE-MESSAGE",
        newMessage: text
    };
};

const TextInput = (props) => {

    let textRef = React.createRef();
    
    let sendMessage = () => {
        let text = textRef.current.value;
        props.dispatch(actionCreatorChangeMessage(text));
    };

    return (
        <div className={classes.TextInput}>
            <textarea ref={textRef}></textarea>
            <button onClick={sendMessage}>Отправить сообщение</button>
        </div>
    );
};

export default TextInput;
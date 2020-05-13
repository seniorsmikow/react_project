import React, { createRef } from 'react';
import classes from './Posts.module.css';
import Post from './Post/Post';

let actionCreatorAddPost = () => {
    return {
        type: 'ADD-POST'
    };
};

let actionCreatorUpdateText = (text) => {
    return {
        type: 'UPDATE_TEXT',
        newText: text
    };
};

const Posts = (props) => {
    
    let posts = props.posts.map( el => <Post text={el.text} like={el.like}/> );
    let elem = React.createRef();

    let addPost = () => { 
        props.dispatch(actionCreatorAddPost());
    };

    let changeTextInput = () => {
        let text = elem.current.value;
        props.dispatch(actionCreatorUpdateText(text));
    };

    return (
        <div className={classes.Posts}>
            { posts }
            <div>
                <textarea onChange={changeTextInput} value={props.newText} ref={elem} className={classes.Input} />
            </div>
            <button onClick={addPost} className={classes.Button}>Добавить пост</button>
        </div>
    )
};

export default Posts;
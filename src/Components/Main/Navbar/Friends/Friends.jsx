import React from 'react';
import classes from './Friends.module.css';
import Friend from './Friend/Friend';

const Friends = () => {
    return (
        <div className={classes.Friends}>
            <Friend src="https://pbs.twimg.com/media/Dx-8TiWX0AAZOpw.jpg:large" alt="children" name="Olga" />
            <Friend src="https://i.pinimg.com/originals/54/7b/9d/547b9db42203b2d5c16d9dd0f5626207.jpg" alt="uncle" name="Ivan"/>
            <Friend src="https://i03.fotocdn.net/s122/99c72262910656dd/user_xl/2793934925.jpg" alt="me" name="Lubov"/>
        </div>
    )
};

export default Friends;
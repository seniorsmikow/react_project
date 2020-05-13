import React from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';

const Navbar = () => {
    return (
        <div className={classes.Navbar}>
            <div className={classes.Main}>
                <ul>
                    <li><NavLink to="/Messages">Новости</NavLink></li>
                    <li><NavLink to="/Posts">Посты</NavLink></li>
                    <li><NavLink to="/Dialogs">Диалоги</NavLink></li>
                    <li><NavLink to="/Music">Музыка</NavLink></li>
                </ul>
            </div>
            <Friends />
        </div>
    )
};

export default Navbar;
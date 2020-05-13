import React from 'react';
import classes from './Main.module.css';
import Navbar from './Navbar/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Messages from './Messages/Messages';
import Dialogs from './Dialogs/Dialogs';
import Posts from './Posts/Posts';
import Music from './Music/Music';

const Main = (props) => {

    debugger;

    return (
        <BrowserRouter>
            <div className={classes.Main}>
                <Navbar />
                    <Route path='/music/' render={ () => <Music state={props.state} dispatch={props.dispatch}
                                                            newText={props.state.musicPage.newMusicTitle} /> } />
                    <Route exact path='/messages/' render={Messages} />
                    <Route  path='/dialogs/' render={ () => <Dialogs messages={props.state.dialogsPage.messages}
                                                                        dialogs={props.state.dialogsPage.dialogs}
                                                                        dispatch={props.dispatch} />} />
                    <Route exact path='/posts/' render={ () => <Posts posts={props.state.postsPage.posts} 
                                                                        newText={props.state.postsPage.inputText}
                                                                        dispatch={props.dispatch} /> }/>
            </div>
        </BrowserRouter>
    )

};

export default Main;
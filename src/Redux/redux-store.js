import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import postsReducer from './Posts-reducer';
import musicReducer from './music-reducer';
import dialogsReducer from './Dialogs-reducer';
import usersReducer from './Users-reducer';
import profileReducer from './Profile-reducer';
import authReducer from './auth-reducer';
import appReducer from './app-reducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

let reducersBuild = combineReducers({
    postsPage: postsReducer,
    music: musicReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    profilePage: profileReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducersBuild, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.store = store;

export default store;

//applyMiddleware(thunkMiddleware)
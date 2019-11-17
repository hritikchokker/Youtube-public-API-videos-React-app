import {combineReducers} from 'redux';
import postReducer from './postReducer';
import userReducer from './userReducer';

export default combineReducers({
    // replaceMe: () => 'hi there'
    posts: postReducer,
    users: userReducer
});
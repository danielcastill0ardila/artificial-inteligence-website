import { combineReducers } from 'redux';
import {rootReducer as users} from './users';
import {rootReducer as images} from './images';

const entities =  combineReducers({
    images,
    users
});
export default combineReducers({
    entities
});
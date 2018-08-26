import { combineReducers } from 'redux';
import {rootReducer as users} from './users';

const entities =  combineReducers({
    users
});
export default combineReducers({
    entities
});

import { combineReducers } from'redux';
import {types} from '../actions/types';
export const entities = (state = {},action)=>{
    switch(action.type){
        case types.ADD:
        const {imageResult} = action.payload;
        return Object.assign({},state,imageResult);
        
        default:
        return state;
    };
};

export default combineReducers({
    entities
});
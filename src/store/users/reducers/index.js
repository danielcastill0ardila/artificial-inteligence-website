
import { combineReducers } from'redux';
import {types} from '../actions/types';
export const entities = (state = [],action)=>{
    switch(action.type){
        case types.FETCH:
    
        const {test} = action.payload
        return Object.assign([],state,test);
        default:
        return state;
    };
};

export default combineReducers({
    entities
});
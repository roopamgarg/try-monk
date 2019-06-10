import {USER_SIGN_UP} from '../actions/api/types';
import {USER_SIGN_IN} from '../actions/api/types';

export default (state = [] , action) =>{
    switch(action.type){
        case USER_SIGN_UP:
        
            return action.payload;
        case USER_SIGN_IN:
        
            return action.payload;
        default:
            return state;
    }
}
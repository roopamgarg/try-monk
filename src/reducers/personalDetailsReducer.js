import { ADD_PERSONAL_DETAILS } from '../actions/api/types';

export default (state = [] , action) =>{
    switch(action.type){
        case ADD_PERSONAL_DETAILS:
        console.log(action.payload)
            return action.payload;
        default:
            return state;
    }
    
}
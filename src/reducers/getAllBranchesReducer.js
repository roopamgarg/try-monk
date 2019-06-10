import {GET_ALL_BRANCHES} from '../actions/api/types';


export default (state = [] , action) =>{
    switch(action.type){
        case GET_ALL_BRANCHES:
            return action.payload;
        default:
            return state;
    }
}
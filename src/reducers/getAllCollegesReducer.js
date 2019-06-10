import {GET_ALL_COLLEGES} from '../actions/api/types';


export default (state = [] , action) =>{
    switch(action.type){
        case GET_ALL_COLLEGES:
            return action.payload;
        default:
            return state;
    }
}
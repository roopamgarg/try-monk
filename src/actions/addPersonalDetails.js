import axios from './api/axiosApi'
import {ADD_PERSONAL_DETAILS} from './api/types';

export const addPersonalDetails = (data,history) => async dispatch =>{
    console.log(data)
    const userdata = await axios.post('/api/save_personal_details',JSON.stringify(data));
    if(userdata){
        dispatch({type:ADD_PERSONAL_DETAILS,payload:userdata})
        const route = await axios.get('/api/redirect_route')
        history.push(route.data.page)
    }else{
        history.push('/personal_details')
    }
}
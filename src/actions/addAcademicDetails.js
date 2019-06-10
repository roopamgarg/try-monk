import axios from './api/axiosApi'
import {ADD_ACADEMIC_DETAILS} from './api/types';

export const addAcademicDetails = (data,history) => async dispatch =>{
    console.log(data)
    const userdata = await axios.post('/api/save_academic_details',JSON.stringify(data));
    if(userdata){
        
        dispatch({type:ADD_ACADEMIC_DETAILS,payload:userdata})
        const route = await axios.get('/api/redirect_route')
        history.push(route.data.page)
    }else{
        history.push('/academic_details')
    }
}
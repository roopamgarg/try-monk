import axios from './api/axiosApi'
import {ADD_EMAIL} from './api/types';

export const addEmail = (data,history) => async dispatch =>{

    const useremail = await axios.post('/api/save_email',JSON.stringify(data));
  
        dispatch({type:ADD_EMAIL,payload:useremail.data})
        
        history.push('/signup')
}
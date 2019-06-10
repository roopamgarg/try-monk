import axios from './api/axiosApi'
import {USER_SIGN_IN} from './api/types';

export const signIn = (data,history) => async dispatch =>{

    const user = await axios.post('/auth/local_login',JSON.stringify(data))
                        .catch(()=>({error:'Invalid Email or password'}));
    console.log(user)
    if(!user.error){
        
        dispatch({type:USER_SIGN_IN,payload:user.data})
       const route = await axios.get('/api/redirect_route')
        history.push(route.data.page)
    }else{
        dispatch({type:USER_SIGN_IN,payload:user})
        
    }
}
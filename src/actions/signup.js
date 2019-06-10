import axios from './api/axiosApi'
import {USER_SIGN_UP} from './api/types';

export const signUp = (data,history) => async dispatch =>{
    console.log(data)
    const user = await axios.post('/auth/local_register',JSON.stringify(data));
    await axios.post('/auth/local_login',JSON.stringify(data));
    if(user){
        history.push('/personal_details')
        dispatch({type:USER_SIGN_UP,payload:user.data})
        const route = await axios.get('/api/redirect_route')
        history.push(route.data.page)
    }else{
        history.push('/signin')
    }
}
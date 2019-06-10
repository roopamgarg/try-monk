import axios from './api/axiosApi'
import {GET_ALL_COLLEGES} from './api/types'
export const getColleges = (course="Diploma") => async(dispatch) =>{
    let colleges ;
    if(course.localeCompare("Diploma") === 0){
        colleges = await axios.get('/api/search_college/diploma')
    }else{
        colleges = await axios.get('/api/search_college/btech')
    }
    dispatch({type:GET_ALL_COLLEGES,payload:colleges.data})
}
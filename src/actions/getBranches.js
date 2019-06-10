import axios from './api/axiosApi'
import { GET_ALL_BRANCHES} from './api/types'
export const getBranches = (course='Diploma',college='Aryabhatt Institute Of Technology') => async(dispatch) =>{
    let branches ;
    if(course.localeCompare("Diploma") === 0){
        branches = await axios.get(`/api/search_branch/diploma?college=${college}`)
    }else{
        branches = await axios.get(`/api/search_branch/btech?college=${college}`)
    }
    dispatch({type:GET_ALL_BRANCHES,payload:branches.data})
}
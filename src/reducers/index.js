import { combineReducers } from 'redux';
import userAuth from './userAuthReducer'
import PersonalDetails from './personalDetailsReducer'
import allColleges from './getAllCollegesReducer'
import allBranches from './getAllBranchesReducer'
import academicDetails from './academicDetailsReducer';
export default combineReducers({
  userAuth,
  PersonalDetails,
  allColleges,
  allBranches,
  academicDetails,
})  
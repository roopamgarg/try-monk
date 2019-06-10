import React,{Component} from 'react';
import { connect } from 'react-redux'
import {getBranches} from '../actions/getBranches';
import {getColleges} from '../actions/getColleges';
import { addAcademicDetails } from '../actions/addAcademicDetails';
class AcademicDetailsPage extends Component{

    state={
        
    }
    componentDidMount = () =>{
        this.props.getColleges('Diploma');
        this.props.getBranches('Diploma');
       
        
       
    }
    componentWillMount = () =>{
        this.setState({
            course:"Diploma",
            college:this.props.allColleges[0],
            branch:this.props.allBranches[0],
            admissionYear:"",
            complitionYear:"",
            course_duration:"",
            aadharNumber:""
        })
    }

    onInputChangeHandler = (event,field) =>{
        switch(field){
            case 'branch':
                this.setState({
                    branch:event.target.value
                })
                break;
            case 'admissionYear':
                this.setState({
                    admissionYear:event.target.value
                })
                break;
            case 'complitionYear':
                this.setState({
                    complitionYear:event.target.value
                })
                break;
            case 'course_duration':
                this.setState({
                    course_duration:event.target.value
                })
                break;
            case 'aadharNumber':
                this.setState({
                    aadharNumber:event.target.value
                })
                break;
            default:
                break;    
                
        }
    }

    onCourseChangeHandler = (event)=>{
        this.props.getColleges(event.target.value);
        if(event.target.value.localeCompare('Diploma') === 0){
            this.props.getBranches(event.target.value,'Aryabhatt Institute Of Technology');
        }else{
            this.props.getBranches(event.target.value,'Delhi Technical University');
        }
        this.setState({
            course:event.target.value
        })
    }

    onCollegeChangeHandler = (event)=>{
        this.props.getBranches(this.state.course,event.target.value);
        this.setState({
            college:event.target.value
        })
    }
    renderBranchList = () =>(

        this.props.allBranches.map((element,index)=>(
            <option key={index}>{element}</option>
        ))
    )
    renderCollegeList = () =>(
        
        this.props.allColleges.map((element,index)=>(
            <option key={index}>{element}</option>
        ))
    )
    onFormSubmitHandler = (event) =>{
        event.preventDefault();
        
        const {
            course,
            college,
            branch,
            admissionYear,
            complitionYear,
            course_duration,
            aadharNumber
        } = this.state
        if(!course){
            this.setState({
                college:'Diploma'
            })
        }
        if(!college){
            this.setState({
                college:this.props.allColleges[0]
            })
        }
        if(!branch){
            this.setState({
                branch:this.props.allBranches[0],           
            })
        }
        const data ={
        institution:college,
        branch,
        course,
        admissionYear,
        complitionYear,
        course_duration,
        aadharNumber,
        }
        this.props.addAcademicDetails(data,this.props.history);
    }
    render(){
        console.log(this.props.allBranches);
        console.log(this.props.allColleges);
        const date = new Date();
        return (
            <div className="personal-detail-page u-display-flex">
               <div className="personal-detail-page__sidebar">
               <h2 className="u-text-white">EDGE</h2>
                    <ul id="progressbar">
                        <li className="active">Personal Details</li>
                        <li className="active">Academic Details</li>
                        
                        <li>Completed</li>
                    </ul>
                </div>
                <div className="personal-detail-page__content flex-fill">
                    <h1 className="personal-detail-page__header">Tell us about your academics !</h1>
                    <form onSubmit={(e)=>this.onFormSubmitHandler(e)} className="detail__form detail__form--2">
                        <select className="detail__input" onChange={(e)=>this.onCourseChangeHandler(e)} placeholder="Course">
                            <option>Diploma</option>
                            <option>B.tech</option>
                        </select>
                        
                        <select className="detail__input" onChange={(e)=>this.onCollegeChangeHandler(e)} placeholder="institute">
                        {this.renderCollegeList()}
                        </select>
                        <select className="detail__input" onChange={(e)=>{this.onInputChangeHandler(e,'branch')}} placeholder="Branch/Discipline">
                        {this.renderBranchList()}
                        </select>
                        <input  
                            type="text" 
                            onFocus={(e)=>{e.target.type="month"}} 
                            onBlur={(e)=>{e.target.type="text"}} 
                            className="detail__input" 
                            placeholder="Admission Year" 
                            onChange={(e)=>{this.onInputChangeHandler(e,'admissionYear')}}
                            max={`${date.getFullYear()}-${("0" + date.getMonth()+1 ).slice(-2)}`}  //getting current date
                            required
                        />
                        <input 
                            type="text" 
                            onFocus={(e)=>{e.target.type="month"}} 
                            onBlur={(e)=>{e.target.type="text"}} 
                            className="detail__input" 
                            placeholder="Completion Year" 
                            onChange={(e)=>{this.onInputChangeHandler(e,'complitionYear')}}
                            max={`${date.getFullYear()+4}-${("0" + date.getMonth()+1 ).slice(-2)}`}  //getting current date
                            required
                        />
                        <input type="number"  onChange={(e)=>{this.onInputChangeHandler(e,'course_duration')}} className="detail__input" placeholder="Course Duration"   required/>
                        <input type="text" onChange={(e)=>{this.onInputChangeHandler(e,'aadharNumber')}} className="detail__input" placeholder="Enrollment No/Aadhar No." required/>
                       
                        <button className=" btn-success detail-btn u-margin-y-lg" type="submit">Next</button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({allBranches,allColleges}) =>(
    {
        allColleges,
        allBranches
    }
)
export default connect(mapStateToProps,{
    getBranches,
    getColleges,
    addAcademicDetails
})(AcademicDetailsPage);
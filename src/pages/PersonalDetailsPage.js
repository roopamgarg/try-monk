import React,{Component} from 'react';
import {connect } from 'react-redux'
import {addPersonalDetails} from '../actions/addPersonalDetails'
class PersonalDetailsPage extends Component{
    state={
        username:"",
        email:"",
        fathers_name:"",
        dob:"",
        personal_contact_number:"",
        guardian_contact_number:"",
        address:"",
        city:"",
        pin_code:"",
        state:""
    }
    onInputChangeHandler = (event,field) =>{
        const {value} = event.target;
      
        switch(field){
            case "username":
                this.setState({
                    username:value
                });
                break;
            case "email":
                this.setState({
                    email:value
                });
                break;
            case "fathers_name":
                this.setState({
                    fathers_name:value
                });
                break;
            case "dob":
                this.setState({
                    dob:value
                });
                break;
            case "personal_contact_number":
                this.setState({
                    personal_contact_number:value
                });
                break;
            case "guardian_contact_number":
                this.setState({
                    guardian_contact_number:value
                });
                break;
            case "address":
                this.setState({
                    address:value
                });
                break;
            case "city":
                this.setState({
                    city:value
                });
                break;
            case "pin_code":
                this.setState({
                    pin_code:value
                });
                break;
            case "state":
                this.setState({
                    state:value
                });
                break;
            default:
                break;  
            
        }
    }
    onFormSubmitHandler = (event) =>{
        event.preventDefault();
        const {
            username,
            email,
            fathers_name,
            dob,
            personal_contact_number,
            guardian_contact_number,
            address,
            city,
            pin_code,
            state,
        } = this.state
        const data = {
            full_name:username,
            email,
            fathers_name,
            dob,
            personal_contact_number,
            guardian_contact_number,
            address,
            city,
            pin_code,
            state,
        }
        this.props.addPersonalDetails(data,this.props.history)

    }
    render(){
        const {
            username,
            email,
            fathers_name,
            dob,
            personal_contact_number,
            guardian_contact_number,
            address,
            city,
            pin_code,
            state,
        } = this.state
        const date = new Date();
        return (
            <div className="personal-detail-page u-display-flex">
               <div className="personal-detail-page__sidebar">
               <h2 className="u-text-white">EDGE</h2>
                    <ul id="progressbar">
                        <li className="active">Personal Details</li>
                        <li >Academic Details</li>
                        
                        <li>Completed</li>
                    </ul>
                </div>
                <div className="personal-detail-page__content flex-fill">
                    <h1 className="personal-detail-page__header">Let us know about you !</h1>
                    <form className="detail__form" onSubmit={(e)=>this.onFormSubmitHandler(e)}>
                        <input type="text"  onChange={(e)=>this.onInputChangeHandler(e,'username')}  value={username} className="detail__input" placeholder="Full Name" required/>
                        <input type="email"  onChange={(e)=>this.onInputChangeHandler(e,'email')} value={email} className="detail__input" placeholder="Email" required/>
                        <input type="text"  onChange={(e)=>this.onInputChangeHandler(e,'fathers_name')} value={fathers_name} className="detail__input" placeholder="Father's name" required/>
                        <input type="text" 
                            onFocus={(e)=>{e.target.type="date"}} 
                            onBlur={(e)=>{e.target.type="text"}}  
                            className="detail__input" 
                            placeholder="D.O.B" onChange={(e)=>this.onInputChangeHandler(e,'dob')} value={dob}
                            max={`${date.getFullYear()}-${("0" + date.getMonth()+1 ).slice(-2)}-${("0" + date.getDate()).slice(-2)}`}  //getting current date
                            required
                        />
                        <input type="number" onChange={(e)=>this.onInputChangeHandler(e,'personal_contact_number')} value={personal_contact_number} className="detail__input" placeholder="Contact number (Personal)" required/>
                        <input type="number" onChange={(e)=>this.onInputChangeHandler(e,'guardian_contact_number')} value={guardian_contact_number} className="detail__input" placeholder="Contact Number (Guardian)" required/>
                        <input type="text" onChange={(e)=>this.onInputChangeHandler(e,'address')} value={address} className="detail__input" placeholder="Address" required/>
                        <input type="text" onChange={(e)=>this.onInputChangeHandler(e,'city')} value={city} className="detail__input" placeholder="City" required/>
                        <input type="number" onChange={(e)=>this.onInputChangeHandler(e,'pin_code')} value={pin_code}  className="detail__input" placeholder="Pin Code" required/>
                        <input type="text" onChange={(e)=>this.onInputChangeHandler(e,'state')} value={state} className="detail__input" placeholder="State" required/>
                        <button className=" btn-success detail-btn u-margin-y-lg" type="submit">Next</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default connect(null,{
    addPersonalDetails
})(PersonalDetailsPage);
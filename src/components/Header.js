import React,{Component} from 'react';
import { connect } from 'react-redux';

import { addEmail } from '../actions/addEmail'
class Header extends Component{
    state={
        email:''
    }
    onInputChangeHandler =(e)=>{
        this.setState({
            email:e.target.value
        })
    }
    onFormSubmit = (event) =>{
        event.preventDefault();
        this.props.addEmail({
            email:this.state.email
        },this.props.history)
    }
    render(){
    return(
        <div className="header">
            <h1 className="header__heading">Career management made easy</h1>
            <p className="header__paragraph">Services that empowered education and provide flexibility to focus on their academic task and other things leave for us</p>
            <form className="header__input-box" onSubmit={(e)=>this.onFormSubmit(e)} >
                <input placeholderemail type="text" onChange={(e)=>this.onInputChangeHandler(e)} placeholder="Email" className="header__input" required/>
                <button className="btn btn-success header__btn ">Get Started</button>
            </form>
        </div>
    )
    }
}

export default connect(null,{
    addEmail
})(Header);
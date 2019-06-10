import React,{Component} from 'react'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {signUp} from '../actions/signup';
class SignUpPage extends Component{
    state = {
        username:"",
        email:"",
        password:"",
        error:""
    }
    onInputChange = (event,field) =>{
        switch(field){
            case "username":
                this.setState({
                    username:event.target.value
                });
                break;
            case "email":
                this.setState({
                    email:event.target.value
                });
                break;
            case "password":
                this.setState({
                    password:event.target.value
                })
                break;
            default:
                break;
        }
    }

    onFormSubmit = (event) =>{
        event.preventDefault();
    
        if(this.state.password.length < 8){
            const error = (
                <div className="error">
                    <p>Password must have 8 characters long.</p>
                </div>
            )
            this.setState({
                error
            })
        }else{
            this.setState({
                error:""
            })
            this.props.signUp({
                username:this.state.email,
                password:this.state.password
            },this.props.history)
        }
        
    }
    render(){
        const {username,email,password} = this.state;
        return(
            <div className="signup-page u-display-flex u-justify-content-center u-align-items-center u-text-white">
                <div className="signup-page__card u-display-flex u-justify-content-center u-align-items-center">
                    <div className="signup-page__card__left flex-fill u-display-flex u-justify-content-center u-align-items-center u-flex-column">
                       <h2 className="signup-page__header">Create your account</h2>
                       <p className="signup-page__dash"></p>
                       <p className="signup-page__para">Sign up and start to chase your dreams</p>
                    </div>
                    <form onSubmit={(e)=>this.onFormSubmit(e)} className="signup-page__card__right u-text-black flex-fill u-display-flex u-justify-content-center u-align-items-center u-flex-column">

                       <h2 className="signup-page__header  u-margin-y-sm">Sign Up</h2>
                       {this.state.error}
                       <input 
                        type="text" 
                        className="signup-page__input " 
                        placeholder="Username" 
                        value={username} 
                        onChange={(e)=>this.onInputChange(e,'username')}  
                        required
                       />
                       <input 
                        type="email" 
                        className="signup-page__input " 
                        placeholder="Email" 
                        value={email}  
                        onChange={(e)=>this.onInputChange(e,'email')} 
                        required
                       />
                       
                       <input 
                        id="password" 
                        type="password" 
                        className="signup-page__input" 
                        placeholder="Password" 
                        value={password} 
                        onChange={(e)=>this.onInputChange(e,'password')} 
                        required
                       />

                        <button type="submit" className="btn-sign-up ">Create Account</button>
                        <Link to="/signin">Already have an accout ?</Link>
                    </form>
                   
                </div>
            </div>
        )
    }
}

export default connect(null,{
    signUp
})(SignUpPage);
import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {signIn} from '../actions/signin'
class SignInPage extends Component{
    state = {
        username:"",
        password:""
    }
    onInputChangeHandler = (event,field) =>{
        switch(field){
            case 'username':
                this.setState({
                    username:event.target.value
                });
                break;
            case 'password':
                this.setState({
                    password:event.target.value
                });
                break;
            default:
                break;
        }
    }
    onFormSubmitHandler = (event) =>{
        event.preventDefault();
        const {username,password} = this.state
        this.props.signIn({
            username,
            password
        },this.props.history)
    }
    render(){
        return(
            <div className="signin-page u-display-flex u-justify-content-center">
                <div className="signin-page__left flex-fill">

                </div>
                <form onSubmit={(e)=>this.onFormSubmitHandler(e)} className="signin-page__right flex-fill u-display-flex u-justify-content-center u-align-items-center u-flex-column">
                    <h1 className="signin-page__header">Monktree</h1>
                    <p className="signin-page__para">Welcome back! Please log in to your account.</p>
                    <p className="error">{this.props.userAuth.error}</p>
                    <input onChange={(e)=>this.onInputChangeHandler(e,'username')} value={this.state.username} className="signin-page__input" placeholder="Email" type="text" required/>
                    <input onChange={(e)=>this.onInputChangeHandler(e,'password')}  value={this.state.password} className="signin-page__input" placeholder="Password" type="password" required/>
                   <div className="signin-page__btn-grp">
                    <button type="submit" className="signin-page__btn active">Sign In</button>
                    <Link to="/signup" className="signin-page__btn">Sign Up</Link>
                    </div>
                    <h4 className="signin-page__header--2">One account for All</h4>
                </form>
            </div>
        )
    }
}


const mapStateToProps = ({userAuth}) =>({userAuth})
export default connect(mapStateToProps,{
    signIn
})(SignInPage);
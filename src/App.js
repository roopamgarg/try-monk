import React, { Component } from 'react';
import {BrowserRouter,Route } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

import Home from './pages/home'
import SignUpPage from './pages/signup'
import PersonalDetailsPage from './pages/PersonalDetailsPage'
import AcademicDetailsPage from './pages/AcademicDetailsPage'
import SignInPage from './pages/signin'
import Done from './pages/done';
import PricingPage from './pages/Pricing';
AOS.init();

class App extends Component {
  render() {
    return (

     <BrowserRouter >
     <div>
       <Route path="/" exact component={Home}/>
       <Route path="/signup" exact component={SignUpPage}/>
       <Route path="/personal_details" exact component={PersonalDetailsPage}/>
       <Route path='/academic_details' exact component={AcademicDetailsPage}/>
        <Route path='/signin' exact component={SignInPage}/>
        <Route path='/done' exact component={Done}/>
        <Route path='/pricing' exact component={PricingPage}/>

        
      </div>
     </BrowserRouter>
    );
  }
}

export default App;

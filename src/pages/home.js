import React from 'react';

import NavBar from '../components/NavBar';
import Header from '../components/Header';
import Footer from '../components/footer';
import UserCard from '../components/userCard'

const Home = (props) =>(
    <div class="home-page">
        <div className="header-container">
            <NavBar/>
            <Header history={props.history}/>
        </div>
        <div data-aos="fade-in" class="features-container u-display-flex u-justify-content-center">
            <div className="features">
                <div data-aos="zoom-in-up" className="features__box">
                    <h4>Books</h4>
                    <p>
                        Yes Book we will deliver
                        your books as per your 
                        syllabus on time 
                    </p>
                </div>
                <div data-aos="zoom-in-up" className="features__box">
                    <h4>VIDEO LECTURES</h4>
                    <p>
                        Prepared by experts and based 
                        on your specific subject
                    </p>
                </div>
            </div>
            <div>
                <div data-aos="zoom-in-up" className="features__box">
                    <h4 >COOL SERVICES</h4>
                    <p>
                        All best services to make 
                        your education hasslefree
                    </p>
                </div>
                <div data-aos="zoom-in-up" className="features__box">
                    <h4>PLACEMENTS ASSISTANCE</h4>
                    <p>
                        Most important! our HR experts
                        are ready to launch you for 
                        best career opportunities.  
                    </p>
                </div>
                <div data-aos="zoom-in-up" className="features__box">
                    <h4>AND</h4>
                    <p>
                        We are offering support like
                        Notes, Instruments & many 
                        more things
                    </p>
                </div>
            </div>
        </div>
        <div data-aos="fade-in" className="our-dashboard">
            <div className="our-dashboard__content u-display-flex u-flex-column u-justify-content-center u-align-items-center">
                <h2>Manage all benefits  in single Dashboard</h2>
                <div className="u-display-flex">
                    <div>
                        <div data-aos="zoom-in-up" className="our-dashboard__card">
                            <h4>Books</h4>
                            <p>
                            Manage your bookbank and account   
                            </p>
                        </div>
                        <div data-aos="zoom-in-up" className="our-dashboard__card">
                        <h4>Lectures</h4>
                            <p>
                                Customized lectures 
                                Video directories
                                Courses
                            </p>
                        </div>
                        <div data-aos="zoom-in-up" className="our-dashboard__card">
                        <h4>Resume Building</h4>
                        <p>
                        Manage your resume
                        Skill Management 
                        </p>
                        </div>
                    </div>
                    <div>
                        <div data-aos="zoom-in-up" className="our-dashboard__card">
                        <h4>Customized Notes</h4>
                        <p>
                        Question Paper
                        Sample papers
   
                        </p>
                        </div>
                        <div data-aos="zoom-in-up" className="our-dashboard__card">
                        <h4>Internship</h4>
                        <p>
                        Manage your application

                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div data-aos="fade-in" className="reach u-display-flex  u-align-items-center">
            <div className="reach__banner">

            </div>
            <div data-aos="zoom-in-up" className="reach__content">
                <h4>OUR SERVICES</h4>
                <p>Presently we are opening for every institute of Delhi NCR</p>
                <img src={require('../img/bg/stats.svg')} />
            </div>
        </div>
        <div data-aos="fade-in" className="section-feedback u-display-flex  u-justify-content-center u-align-items-center" >
            <UserCard 
            content="I really appreciate monktree  for support It is providing 
to students, I think it is the one stop solution for a student,
Thank you so much for your support "
            username="Pankaj Mehra"
            college_name="Guru Nanak Dev Institute of Technology"/>
        </div>
        <Footer/>

    </div>
)

export default Home;
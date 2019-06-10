import React from 'react';
import { Link } from 'react-router-dom';

const Footer = (props) =>(
   <div data-aos="zoom-in-up" data-aos="fade-in" className="footer">
    <div className="section-enroll" id="pricing">
            <div className="enroll-card">
                <div className="enroll-card__content">
                    <h2>Ready to get started ?</h2>
                    <p>Join now and be a part of next generation education platform</p>
                </div>
                <div className="enroll-card__btn-box" >
                    <Link to="/signin" className="btn btn-cta">Enroll Now</Link>
                </div>
            </div>
        </div>
        <div data-aos="zoom-in-up" className="footer__content">

            <ul>
                <li>RESOURCES</li>
                <li>Video Lectures</li>
                <li>Short Notes</li>
                <li>Question Papers</li>
                <li>Bookbank</li>

            </ul>
            <ul>
                <li>OUR COMPANY</li>
                <li>About Us</li>
                <li>Career</li>
                <li>Partner with us</li>
                <li>Support</li>
            </ul>
            <ul>
                <li>SERVICES</li>
                <li>Bookbank</li>
                <li>Lecture & Courses</li>
                <li>Resume Building</li>
                <li>Skill Development</li>
            </ul>
        </div>
        <div className="footer__privacy">
            <p>Monktree Education Pvt Ltd 2016-2019</p>
            <p>Privacy Policy | Terms of use | Contact Us </p>
        </div>
   </div>
)

export default Footer;
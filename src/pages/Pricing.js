import React from 'react';
import { Link } from 'react-router-dom';

import NavBar from '../components/NavBar';
import Header from '../components/Header';
import PricingCard from '../components/PricingCard';
import PaymentCard from '../components/payment_card';
import Footer from '../components/footer';


const PricingPage = (props) =>(
    <div class="pricing-page">
        <NavBar/>
        <div className=" pricing-page__header">
            <h1>Start Reading</h1>
            <div className="pricing-page__card-list u-display-flex u-justify-content-space-evenly u-align-items-center">
            <PricingCard
                card_color="orange"
                course="DIPLOMA"
                price="3500₹"
                duration="3"
                features={["Books","Lectures","Short Notes","Internship Support","Placement Assistance"]}
            />
            <PricingCard
                card_color="green"
                course="BTECH/BE"
                price="5000₹"
                duration="4"
                features={["Books","Lectures","Short Notes","Internship Support","Placement Assistance"]}
            />
            <PricingCard
                card_color="purple"
                course="BCA/BVOC/BSC"
                price="4000₹"
                duration="3"
                features={["Books","Lectures","Short Notes","Internship Support","Placement Assistance"]}
            />
            </div>
            <h2 className="header_secondary">Payment Options</h2>
            <div className="pricing-page__card-list u-display-flex u-justify-content-space-evenly u-align-items-center">
                <PaymentCard
                    image={require('../img/bg/payment-credit.svg')}
                    heading={'Credit/Debit Card'}
                    content={'Accepting payments through Credit/Debitcards from all major banks.'}
                />
                <PaymentCard
                    image={require('../img/bg/payment-emi.svg')}
                    heading={'EMI option'}
                    content={'Split the payment fee across 3 or more months. Option is available for all plans.'}
                />
                <PaymentCard
                    image={require('../img/bg/payment-wallet.svg')}
                    heading={'Payment Wallets'}
                    content={'Accepting  all major Digital wallets through our payment Gatways i.e PayTm/Phonepe'}
                />
                <PaymentCard
                    image={require('../img/bg/payment-cash.svg')}
                    heading={'Cash Pickup'}
                    content={'We can collect playments by cash from your place'}
                />
            </div>
        </div>
        <Footer/>
    </div>
)

export default PricingPage;
import React from 'react';

const PaymentCard = (props) =>(
    <div data-aos="zoom-in-up" className="payment-card">
        <div className="payment-card__image">
            <img src={props.image} alt="payment option"/>
        </div>
        <div className="payment-card__content">
            <h2>{props.heading}</h2>
            <p>{props.content}.</p>
        </div>
         
    </div>
)

export default PaymentCard;
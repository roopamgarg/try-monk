import React from 'react';

const PricingCard = (props) =>(
    <div data-aos="zoom-in-up" className={`pricing-card ${props.card_color}`}>
        <div className="pricing-card__header">
            <p>{props.course}</p>
        </div>
        <div className="pricing-card__content">
            <div className="pricing-card__pricing">
                <h2>{props.price}</h2>
                <h4>{props.duration} YEARS</h4>
            </div>
            <ul className="pricing-card__features">
                {props.features.map((element)=>(
                    <li>{element}</li>
                ))}   
            </ul>
        </div>
    </div>
)

export default PricingCard;
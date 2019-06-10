import React from 'react'

const Card = (props) =>{
    
    return (
        <div className="my-card">
            <div className="my-card__img-box">
                <img src={props.image} alt="bags" className="my-card__img" />
            </div>
            <div className="my-card__content">
                <h2 className="my-card__header m-3">{props.header}</h2>
                <p className="my-card__para m-3">{props.paragraph}</p>
                <button className="btn btn-success m-3">Know More</button>
            </div>
        </div>
    
    )
}


export default Card;
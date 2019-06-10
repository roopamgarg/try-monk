import React from 'react';

const UserCard = (props) =>(
    <div data-aos="zoom-in-up" className="user-card u-display-flex u-flex-column u-justify-content-space-around u-align-items-center">
        <p className="user-card__heading">User Feedback</p>
        <div className="user-card__content">
            <p >{'" '+props.content+' "'}</p>
        </div>
        <div className="user-card__detail">
        <h2>{props.username}</h2>
        <p>{props.college_name}</p>
        </div>
    </div>
)

export default UserCard;
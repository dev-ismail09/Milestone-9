import React from 'react';
import './Friend.css';
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    // console.log(friend)  
    const {id, name, email, phone, website} = friend;
    return (
        <div className='friend-style'>
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{phone}</p>
            <p>{website}</p>
            <p><Link to={`/friend/${id}`}>Show More Details</Link></p>
        </div>
    );
};

export default Friend;
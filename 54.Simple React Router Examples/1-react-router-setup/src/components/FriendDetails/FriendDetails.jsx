import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData();
    // console.log(friend)
    return (
        <div>
            <h2>Here Show Friend Detalis</h2>
            <h2>Name: {friend.name}</h2>
            <p>Company: {friend.company.name}</p>
            <p>Email: {friend.email}</p>
            <p>Phone: {friend.phone}</p>
            <p>Address: {`${friend.address.street}, ${friend.address.city},  ${friend.address.zipcode}`}</p>
        </div>
    );
};

export default FriendDetails;
import React from 'react';
import './Tshirt.css'

const Tshirt = ({tshirt, handleAddToCart}) => {
    // console.log(tshirt)
    const {name, picture, price} = tshirt;
    return (
        <div className='tshirt-style'>
            <img src={picture} alt="" />
            <h1>{name}</h1>
            <p>Price: ${price}</p>
            <button onClick={()=>handleAddToCart(tshirt)}>Buy Now</button>
        </div>
    );
};

export default Tshirt;
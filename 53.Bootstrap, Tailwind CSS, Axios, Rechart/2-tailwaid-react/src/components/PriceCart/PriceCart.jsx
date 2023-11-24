import React from 'react';
import Feature from '../Feature/Feature';

const PriceCart = ({price}) => {
    return (
        <div className='bg-cyan-300 p-5 rounded-md mb-5 relative'>
           <div className='mb-16'>
           <h1 className='text-center'>
                <span className='text-5xl font-bold'>${price.price}</span>
                <span>/mon</span>
            </h1>
            <h1 className='text-2xl font-bold text-center mb-10'>{price.Name}</h1>
            <p className='underline'>Features:</p>
            {
                price.features.map((feature, idx) => <Feature
                key={idx}
                feature={feature}
                ></Feature>)
            }
           </div>
            <button className='w-full bg-emerald-400 py-2 rounded-md absolute bottom-0 left-0 hover:bg-green-500 duration-200 text-cyan-50 hover:text-cyan-100'>Buy Now</button>
        </div>
    );
};

export default PriceCart;
import React from 'react';
import Feature from '../Feature/Feature';

const PriceCart = ({price}) => {
    return (
        <div className='bg-teal-300 p-5 mb-5 rounded-md flex flex-col'>
            <div className='text-center mb-4'>
                <span className='text-5xl'>${price.price}</span>
                <span>/mon</span>
            <h1 className='text-3xl font-bold'>{price.Name}</h1>
            </div>
            <div>
                <p className='underline'>Feauters:</p>
                {
                    price.features.map((feature, idx) => <Feature
                    key={idx}
                    feature={feature}
                    ></Feature>)
                }
            </div>
            <button className='bg-lime-400 w-full py-2 mt-auto'>Buy Now</button>
        </div>
    );
};

export default PriceCart;
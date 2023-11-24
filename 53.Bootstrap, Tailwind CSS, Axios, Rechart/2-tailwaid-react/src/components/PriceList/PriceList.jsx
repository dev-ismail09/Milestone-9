import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import PriceCart from '../PriceCart/PriceCart';

const PriceList = () => {
    const [prices, setPrices] = useState([]);
    useEffect(()=>{
        fetch('prices.json')
        .then(res => res.json())
        .then(data => setPrices(data))
    },[])
    return (
        <div className='md:grid grid-cols-3 gap-4 m-5 mb-3 h-96'>
            {
                prices.map(price => <PriceCart 
                    key={price.id}
                    price={price}
                    ></PriceCart> )
            }
        </div>
    );
};

export default PriceList;
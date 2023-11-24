import React, { useContext } from 'react';

const Special = ({ring}) => {
   
    return (
        <div className='my-10 text-2xl border-orange-300 border-2 p-10 text-center mx-auto'>
            <p className='text-sm'>Special Person</p>
            <p>Ring: {ring}</p>
           
        </div>
    );
};

export default Special;
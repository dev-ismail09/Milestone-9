import React from 'react';

const Cousin = ({children}) => {
    return (
        <div className='my-10 text-2xl border-orange-300 border-2 p-10 text-center mx-auto '>
            <h1>Cousin</h1>
            <p><small>{children}</small></p>
        </div>
    );
};

export default Cousin;
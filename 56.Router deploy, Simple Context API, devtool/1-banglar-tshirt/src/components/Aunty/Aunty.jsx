import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { GoldContext } from '../Grandpa/Grandpa';

const Aunty = () => {
    const angti = useContext(GoldContext);
    return (
        <div className='my-10 text-2xl border-orange-300 border-2 w-96 p-10 text-center mx-auto '>
            <h1>Aunty</h1>
            <div className='flex gap-5 justify-center'>
            <Cousin>Hemel</Cousin>
            <Cousin>Sisir</Cousin>
            </div>
            <p>{angti}</p>
        </div>
    );
};

export default Aunty;
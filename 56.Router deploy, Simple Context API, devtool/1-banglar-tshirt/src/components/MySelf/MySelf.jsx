import React, { useContext } from 'react';
import Special from '../Special/Special';
import { GoldContext } from '../Grandpa/Grandpa';

const MySelf = ({ring}) => {
    const  angti = useContext(GoldContext)
    return (
        <div className='my-10 text-2xl border-orange-300 border-2 p-10 text-center mx-auto '>
            <h1>MySelf</h1>
            <Special ring={ring}></Special>
            <p>{angti}</p>
        </div>
    );
};

export default MySelf;
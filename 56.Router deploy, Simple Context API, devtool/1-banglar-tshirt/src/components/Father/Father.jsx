import React from 'react';
import MySelf from '../MySelf/MySelf';
import Sister from '../Sister/Sister';
import Brother from '../Brother/Brother';

const Father = ({ring}) => {
    return (
        <div className='my-10 text-2xl border-orange-300 border-2 p-10 text-center mx-auto '>
            <h1>Father</h1>
            <div className='flex gap-5'>
            <MySelf ring={ring}></MySelf>
            <Sister></Sister>
            <Brother></Brother>
            </div>
        </div>
    );
};

export default Father;
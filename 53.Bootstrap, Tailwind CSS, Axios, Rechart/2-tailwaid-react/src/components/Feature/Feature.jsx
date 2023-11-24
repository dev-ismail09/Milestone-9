import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const Feature = ({feature}) => {
    // console.log(feature)
    return (
        <div className='flex items-center mb-3 mt-3'>
            <CheckCircleIcon className="h-6 w-6 text-teal-900 mr-3" />
            <span>{feature}</span>
        </div>
    );
};

export default Feature;
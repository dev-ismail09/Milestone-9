import React from 'react';
import { Link } from 'react-router-dom';

const Food = ({food}) => {
    // console.log(food)
    const {idMeal, strMeal, strMealThumb, strArea, strCategory} = food;
    return (
        <div className='m-auto mb-20 p-3 border-solid border-slate-500 border-2 rounded-md'>
            <img className='w-96 rounded-md' src={strMealThumb} alt="" />
            <h1 className='text-3xl my-5'>{strMeal}</h1>
            <h2 className='text-2xl my-2'>{strArea}</h2>
            <h2 className='text-xl my-2'>{strCategory}</h2>
            {/* <button className='bg-amber-200 p-2 my-2 rounded-sm'>Show Details</button> */}
            <Link to={`/foods/${idMeal}`}><button className='bg-amber-200 p-2 my-2 rounded-sm'>Show Details</button></Link>
        </div>
    );
};

export default Food;
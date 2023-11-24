import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const FoodDetails = () => {
    const foods = useLoaderData();
    const meals = foods.meals;
    // console.log(meals[0])


    const navigate = useNavigate();

    const navigateOnclick = () =>{
        navigate(-1);
    }

    return (
        <div className='text-center py-10'>
            <img className='w-96 mx-auto' src={meals[0].strMealThumb} alt="" />
            <h1 className='text-3xl my-8'>{meals[0].strMeal}</h1>
            <h2 className='text-2xl my-8'>{meals[0].strArea}</h2>
            <p className='px-20'>{meals[0].strInstructions}</p>
            <button onClick={navigateOnclick} className='bg-amber-200 p-2 my-3 rounded-sm'>Go Back</button>
        </div>
    );
};

export default FoodDetails;
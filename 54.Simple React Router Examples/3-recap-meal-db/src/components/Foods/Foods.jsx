import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Food from '../Food/Food';

const Foods = () => {
    const foods = useLoaderData();
    const meals = foods.meals;
    // console.log(meals)

    return (
        <div className='md:grid grid-cols-3 p-5 m-10'>
           {
            meals.map(food => <Food
            key={food.idMeal}
            food={food}
            ></Food> )
           }
        </div>
    );
};

export default Foods;
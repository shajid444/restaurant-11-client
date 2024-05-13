import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Food from '../Food/Food';


const AllFood = () => {
    const foods = useLoaderData();
    console.log(foods);
    
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
            {
                foods.map(food => <Food key={food._id} food={food}>  </Food>)
            }
        </div>
    );
};

export default AllFood;
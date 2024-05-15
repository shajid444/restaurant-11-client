import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Food from '../Food/Food';
import { Helmet } from 'react-helmet-async';


const AllFood = () => {
    const foods1 = useLoaderData();
    // console.log(foods);
    const [foods, setFoods] = useState(foods1);
    const Filter = (event) => {
        setFoods(foods1.filter(f =>f.FoodName.toLowerCase().includes(event.target.value) ))

    }
    
    return (
        <div>
            <Helmet>
            <title>Omiza/All Food</title>
        </Helmet>
            <div className='flex justify-center w-full rounded-lg'><input type="text" className='form-control w-72 p-3 rounded-2xl' onChange={Filter} placeholder='Search' /></div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
            {
                foods.map(food => <Food key={food._id} food={food}>  </Food>)
            }
        </div>
        </div>
    );
};

export default AllFood;
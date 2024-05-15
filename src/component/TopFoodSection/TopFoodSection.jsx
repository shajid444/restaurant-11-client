import { useLoaderData } from "react-router-dom";
import Food from "../Food/Food";
import { useEffect, useState } from "react";


const TopFoodSection = () => {
    // const foods = useLoaderData();
    const [foods, setFoods] = useState([]);

    useEffect(() => {

        fetch(`${import.meta.env.VITE_API_URL}/foods`)
        .then(res=> res.json())
        .then(data =>{
            setFoods(data);
        })


    }, [])
    console.log(foods);
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
            {
                foods.map(food => <Food key={food._id} food={food}>  </Food>).slice(0,6)
            }
        </div>
    );
};

export default TopFoodSection;
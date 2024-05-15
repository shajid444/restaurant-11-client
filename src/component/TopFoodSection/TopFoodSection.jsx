import { Link, useLoaderData } from "react-router-dom";
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

       <div>
        <h1 className="text-center text-4xl mt-5 mb-5 text-black font-bold">Our Popular Foods Menu</h1>
         <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
            {
                foods.map(food => <Food key={food._id} food={food}>  </Food>).slice(0,6)
            }
        </div>
        <div className="flex justify-center">
        <Link to='/allFood' className="btn bg-primary">See All</Link>

        </div>
       
       </div>
    );
};

export default TopFoodSection;
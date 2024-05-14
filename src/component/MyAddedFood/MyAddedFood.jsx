import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { useState } from "react";


const MyAddedFood = () => {
    const { user } = useAuth();
    const loadedList = useLoaderData();
    const load = loadedList.filter(load => load.email == user.email);
    const [list, setList] = useState(load);
    console.log(list);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto">
            {
                list.map(list => <div key={list._id} className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src={list.photo} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Name : {list.food_name}</h2>
                        <p>Price :{list.price}</p>
                        <div className="card-actions justify-end">
                            <Link to={`/updatepage/${list._id}`}>
                                 <button className="btn bg-lime-600 text-black">Update</button>
                             </Link>
                        </div>
                    </div>
                </div>
                   
                )
            }

        </div>
    );
};

export default MyAddedFood;
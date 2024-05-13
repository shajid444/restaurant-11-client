import { useLoaderData } from "react-router-dom";
import useAuth from "../Hooks/useAuth";


const Purchase = () => {
    const purchase = useLoaderData();
    console.log(purchase);
    const { quantity, Price, FoodName } = purchase;
    const {user} = useAuth();
    const date = Date.now();
    return (
        <div className="card w-full bg-primary text-primary-content">
            <div className="card-body text-center">
                <h2 className="text-2xl font-bold text-black">{FoodName}</h2>
                <p className="text-xl font-semibold text-black">Price :{Price}</p>
                <p className="text-xl font-semibold text-black"> Quantity :{quantity}</p>
                <p className="text-xl font-semibold text-black">Name : {user.displayName}</p>
                <p className="text-xl font-semibold text-black">Email :{user.email}</p>
                <p className="text-xl font-semibold text-black">date :{date}</p>
                <div className="card-actions w-full">
                    <button className="btn w-full bg-black text-white">Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Purchase;
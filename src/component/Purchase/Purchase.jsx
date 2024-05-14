import { useLoaderData } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";


const Purchase = () => {
    const purchase = useLoaderData();
    const {user} = useAuth();
    // const purchase = loadedList.filter(load => load.email == user.email);
    const name = user.displayName;
    const email = user.email;
    console.log(purchase);
    const { quantity, Price, FoodName, FoodImage } = purchase;

    const forStore = {name, email, quantity, Price, FoodName, FoodImage}
   
    const date = Date.now();
    // -------------------------
    const addPurchase = ()=>{

        fetch(`${import.meta.env.VITE_API_URL}/purchase`,{
            method : 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(forStore)
           }).then(res => res.json())
           .then(data => {
            console.log(data);
            if(data.insertedId){
                // form.reset;
                Swal.fire({
                    title: 'Success!',
                    text: ' added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
    
            }
           })
    
    
       }



    // ----------------------------


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
                    <button onClick={addPurchase} className="btn w-full bg-black text-white">Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Purchase;
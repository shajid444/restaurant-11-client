import { useLoaderData } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import { useState } from "react";


const MyPurchaseItem = () => {
    const myPurchases = useLoaderData();
    // console.log(myPurchases);
    const {user} = useAuth();
    
    // console.log(user);
    // const myItem = myPurchase.filter(load => load.email == user.email);
    const mitems = myPurchases.filter(myPurchase => myPurchase?.email == user.email);
    // console.log(mitem);
    const [mitem, setMitem] = useState(mitems);
    
    // --------------------------------------------

    const handleDelete = _id => {
      

        // console.log(_id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                console.log('delete confirmed');
                fetch(`${import.meta.env.VITE_API_URL}/purchase/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = mitem.filter(li => li._id !== _id);
                            setMitem(remaining);

                        }
                    })
            }
        });
    }



    // -------------------------------------------
    
    return (
        <div className="grid grid-cols-1 gap-5">
            {
                mitem.map(m => <div key={m._id} className="card lg:card-side max-w-full h-[400px] bg-base-100 shadow-xl">
                <figure className=""><img src={m?.FoodImage || "https://i.ibb.co/zHsmmDN/ivan-torres-MQUqbmsz-GGM-unsplash.jpg"} alt="Album"/></figure>
                <div className="card-body w-6/12">
                  <h2 className="card-title">Name : {m.FoodName}</h2>
                  <p>Price : {m.Price}</p>
                  <div className="card-actions justify-end">
                    <button onClick={() => handleDelete(m._id)} className="btn btn-primary">Delete</button>
                  </div>
                </div>
              </div>)
            }
        </div>
    );
};

export default MyPurchaseItem;
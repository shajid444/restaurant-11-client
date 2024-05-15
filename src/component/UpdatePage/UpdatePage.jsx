import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";


const UpdatePage = () => {
    const update = useLoaderData();
    console.log(update);
    const {user} = useAuth();
    const displayName = user.displayName;
    const email = user.email;

    const updateFood = event => {
        event.preventDefault();
        const form = event.target;

        const photo = form.photo.value;
        const food_name = form.food_name.value;
        const country_name = form.country_name.value;
        const food_catagory = form.food_catagory.value;
        const quantity = form.quantity.value;
        const shortDescription = form.shortDescription.value;
        const price = form.price.value;
       

        const item = { photo, food_name, country_name, food_catagory, quantity, shortDescription, price, displayName,email  };
        console.log(item);

        fetch(`https://assignment-11-server-omega-two.vercel.app/addFood/${update._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(item)
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    // form.reset;
                    Swal.fire({
                        title: 'Success!',
                        text: 'updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })

                }
            })


    }
    return (
        <section className="p-6 ">
        <form onSubmit={updateFood} className="container flex flex-col mx-auto space-y-12">
            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
                <div className="space-y-2 col-span-full lg:col-span-1">
                    <p className="font-medium">Update your Food</p>
                   
                </div>
                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                    <div className="col-span-full sm:col-span-6">
                        <label htmlFor="photo_url" className="text-sm">photo url</label>
                        <input id="" type="url"
                            name="photo" defaultValue={update.photo} placeholder="photo url" className="w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300" />
                    </div>
                    <div className="col-span-full sm:col-span-3">
                        <label htmlFor="food_name" className="text-sm">Food Name</label>
                        <input id="" type="text"
                            name="food_name" defaultValue={update.food_name} placeholder="food_name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300" />
                    </div>
                    <div className="col-span-full sm:col-span-3">
                        <label htmlFor="country_Name" className="text-sm">country_Name</label>
                        <input id="country_Name" type="text"
                            name="country_name" placeholder="country_Name" className="w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300" />
                    </div>
                    <div className="col-span-full sm:col-span-3">
                        <label htmlFor="food_catagory" className="text-sm">food_catagory</label>
                        <input id="food_catagory" type="text"
                            name="food_catagory" defaultValue={update.food_catagory} placeholder="food_catagory" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300" />
                    </div>
                    <div className="col-span-full sm:col-span-3">
                        <label htmlFor="quantity" className="text-sm">Quantity</label>
                        <input id="quantity" type="text" name="quantity" placeholder="Quantity" className="w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300" />
                    </div>
                    <div className="col-span-full">
                        <label htmlFor="short-description" className="text-sm">short description</label>
                        <input id="short-description" type="text" name="shortDescription" placeholder="short description" className="w-full h-20 text-center rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300" />
                    </div>
                    <div className="col-span-full sm:col-span-2">
                        <label htmlFor="price" className="text-sm">price</label>
                        <input id="price" type="text" name="price" defaultValue={update.price} placeholder="price" className="w-full rounded-md text-center focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300" />
                    </div>
                    
                  

                </div>
            </fieldset>
            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
                <div className="space-y-2 col-span-full lg:col-span-1">
                    <p className="font-medium">Profile</p>
                    <p className="text-xs">Adipisci fuga autem eum!</p>
                </div>
                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                    <div className="col-span-full sm:col-span-3">
                        <label htmlFor="username"  className="text-sm">Username</label>
                        <input id="username" type="text"
                            name="username" placeholder="Username" defaultValue={user.displayName} className="w-full rounded-md text-center focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300" />
                    </div>
                    <div className="col-span-full sm:col-span-3">
                        <label htmlFor="email" className="text-sm">Email</label>
                        <input id="email" type="email"
                            name="email" placeholder="Email" defaultValue={user.email} className="w-full text-center rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300" />
                    </div>

                    <div className="col-span-6">
                        <button className="btn w-full bg-lime-700 text-black ">Add</button>

                    </div>
                </div>
            </fieldset>
        </form>
    </section>
    );
};

export default UpdatePage;
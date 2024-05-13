import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";



const ViewDetails = () => {
    const details = useLoaderData();
    console.log(details);
    const { _id,FoodImage, FoodCategory, quantity, Price, FoodName, Description, MadeBy, FoodOrigin } = details;

    // const tspot = {FoodImage, FoodCategory, quantity, Price, FoodName, Description, MadeBy, FoodOrigin } ;
    // ---------------------------------------
   

    



    // -----------------------------------------
    return (
       
        <div className="p-4 w-3/4 mx-auto shadow-xl bg-slate-300 ">
        <Helmet>
            <title>Details</title>
        </Helmet>
        <div className="flex justify-between pb-4 border-bottom">
            <div className="flex items-center">
                <a rel="noopener noreferrer" href="#" className="mb-0 capitalize text-3xl text-primary font-bold">{FoodName}</a>
            </div>

        </div>
        <div className="space-y-4">
            <div className="space-y-2">
                <img src={FoodImage} alt="" className="block object-cover h-full object-center w-full rounded-md h-96 dark:bg-gray-500" />
                <div className="flex items-center text-base justify-around">
                    <span className="bg-slate-400 p-3 rounded-lg">Price : {Price}</span>
                    <span className="bg-slate-400 p-3 rounded-lg">Food Origin : {FoodOrigin} </span>
                    <span className="bg-slate-400  p-3 rounded-lg">Quantity : {quantity}</span>
                </div>
            </div>
            <div className="text-center bg-slate-300 p-5 rounded-md">
               Description : {Description}
            </div>
            <div className="space-y-2">
                <a rel="noopener noreferrer" href="#" className="block">
                    <h3 className="text-xl font-semibold dark:text-violet-600"></h3>
                </a>
                <p className="leading-snug dark:text-gray-600"></p>

                <div className="flex justify-between bg-slate-300 p-5 rounded-md">
                    
                    <p className="text-xl font-semibold ">
                        #Made BY :{MadeBy}
                    </p>
                    <p className="text-xl font-semibold">
                        #Catagory : {FoodCategory}
                    </p>
                  
                   
                </div>
                <div className="w-full">
                        <Link  to={`/purchase/${_id}`} className="btn w-full bg-primary">Purchase</Link>
                    </div>





            </div>
        </div>
    </div>
);
    
};

export default ViewDetails;
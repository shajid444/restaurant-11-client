import { Link } from "react-router-dom";


const Food = ({food}) => {
    console.log(food);
    const {FoodImage, FoodCategory, quantity, Price, FoodName } = food;
    // const {'Food Name'} = food;
    return (
        <div className="lg:max-w-xs md:max-w-xs sm:w-full lg:mx-auto mt-7 mb-7 rounded-md shadow-2xl shadow-slate-400 dark:bg-gray-50 dark:text-gray-800 " >
            <img src={FoodImage} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide">{FoodName} </h2>
                    <p className="dark:text-gray-800">Price :{Price} </p>
                    <p>FoodCategory : {FoodCategory} </p>

                    <div className="flex gap-5">
                        <p>Quantity : {quantity}</p>
                       

                    </div>
                </div>
                <Link to={`/viewDetails/${food._id}`}>

                    <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">View Details</button>
                </Link>

            </div>
        </div>
    );
};

export default Food;
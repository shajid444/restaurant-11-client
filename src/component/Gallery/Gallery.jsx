import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Gallery = () => {
    const [imgs, setimg] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/foods`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setimg(data);
            })
        console.log(imgs);



    }, [])

    return (
        <div className="min-h-screen bg-gradient-to-br from-primary to-primary/70 grid place-items-center">
            <div className="container mx-auto p-10">
                <h1 className='text-3xl mb-5 text-white text-center font-bold'> Gallery</h1>

                {/* card section */}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-6">

                    {
                        imgs.map(img => {
                            return (

                                <div key={img._id} className="text-white shadow-md rounded-lg overflow-hidden relative group">

                                    <img src={img.FoodImage} alt="" className="w-full max-w-[300px] h-[350px] rounded-lg" />

                                    {/* overlay section */}
                                    <div className="absolute top-[-100%] left-0 opacity-0 group-hover:opacity-100 group-hover:top-0 p-4 w-full h-full bg-black/60 group-hover:backdrop-blur-sm divide-neutral-500
                                     ">
                                        <div>
                                            <h1 className="text-3xl text-white">{img.FoodName}</h1>
                                            <Link to='/modal' className="btn mt-10">ADD</Link>
                                        </div>


                                    </div>


                                </div>
                            )

                        })
                    }
                </div>


            </div>



            {/* <div className="h-full grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 border border-black">

               

            </div> */}


        </div>
    );
};

export default Gallery;
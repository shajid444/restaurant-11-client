

const Owner = () => {
    return (
        <section className="py-6 sm:py-12 bg-slate-300 dark:text-gray-800">
            <div className="container p-6 mx-auto space-y-8">
                <div className="space-y-2 text-center">
                    <h2 className="text-3xl font-bold text-primary">ABOUT THE COMPANY</h2>
                    <p className="font-serif text-md text-black">OMIZA means lucky peach.</p>

                    <p className="font-serif text-wrap text-sm text-gray-600">Omiza was founded by chef David Chang in 2004 with the opening of Omiza Noodle Bar in New York City. Credited with “the rise of contemporary Asian-American cuisine” by the New York Times and named the “most important restaurant in America” by Bon Appétit magazine, Omiza has restaurants in the United States as well as a line of restaurant-grade products for home cooks.</p>
                </div>
                <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3 mx-auto">
                    <div className="flex flex-col borde rounded-t-full shadow-2xl shadow-black dark:bg-gray-50">

                        <img alt="" className="object-cover rounded-t-full w-full h-52 dark:bg-gray-500" src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" />



                        <div className="flex flex-col flex-1 p-6">

                            <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">CEO</a>
                            <h3 className="flex-1 py-2 text-sm font-semibold leading-snug text-gray-500">Marguerite Zabar Mariscal is the CEO of Omiza. Marguerite joined Omiza in 2011 as an intern. She took on design and communications for the group and was named Brand Director in 2016</h3>
                            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                                <span>June 1, 2016</span>
                                <span>2.1K views</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col borde rounded-t-full shadow-2xl shadow-black dark:bg-gray-50">

                        <img alt="" className="object-cover rounded-t-full w-full h-52 dark:bg-gray-500" src="https://images.unsplash.com/photo-1589293053074-e5499abade96?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hpZWYlMjBjb29rfGVufDB8fDB8fHww" />

                        <div className="flex flex-col flex-1 p-6">

                            <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">Chef and Founder</a>
                            <h3 className="flex-1 py-2 text-sm text-gray-500 font-semibold leading-snug">David Chang is the founder of Omiza. Since opening his first restaurant, Omiza Noodle Bar, in 2004, he has been named one of “the most influential people of the 21st century” by Esquire, received six James Beard Awards, recognized as GQ’s Man of the Year and a Time 100 honoree</h3>
                        </div>
                    </div>
                    <div className="flex flex-col borde rounded-t-full shadow-2xl shadow-black dark:bg-gray-50">

                        <img alt="" className="object-cover rounded-t-full w-full h-52 dark:bg-gray-500" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D" />

                        <div className="flex flex-col flex-1 p-6">

                            <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">Interior Design</a>
                            <h3 className="flex-1 py-2 text-sm text-gray-500 font-semibold leading-snug">
                                Step into our restaurant and be embraced by an ambiance that marries rustic charm with modern elegance. Warm lighting illuminates cozy seating arrangements, accentuating the fusion of comfort and sophistication. Subtle touches of nature complement contemporary design, inviting you to savor every moment in our inviting space.</h3>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Owner;
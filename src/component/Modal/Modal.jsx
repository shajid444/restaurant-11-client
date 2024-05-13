

const Modal = () => {
    return (
        <div className="flex justify-center items-center">

            <div className="relative flex flex-col items-center max-w-lg gap-4 p-6 rounded-md shadow-md sm:py-8 sm:px-12 bg-slate-300 dark:text-gray-800">
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm ">

                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full ">
                            <label htmlFor="username" className="text-sm">Username</label>
                            <input id="username" type="text" placeholder="Username" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>
                        <div className="col-span-full ">
                            <label htmlFor="url" className="text-sm">image url</label>
                            <input id="url" type="text" placeholder="image url" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="feedback" className="text-sm">Feedback</label>
                            <textarea id="feedback" placeholder="Feedback" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"></textarea>
                        </div>

                    </div>
                </fieldset>

                <button type="button" className="px-8 py-3 font-semibold rounded-full dark:bg-violet-600 dark:text-gray-50">Submit</button>
            </div>
        </div>
    );
};

export default Modal;
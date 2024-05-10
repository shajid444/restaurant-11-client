import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


const Register = () => {

    const handleSubmit = e =>{
        e.
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <Helmet>
            <title>Register Page</title>
        </Helmet>
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Register now!</h1>
                <p className="py-6">Please submit the form correctly</p>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form  className="card-body">
                    <div>
                        <label className="label">
                            <span className="label-text">User Name</span>
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                            <input type="text" className="grow" placeholder="Username" />

                            
                        </label>
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text">Photo url</span>
                        </label>
                        <label className="input input-bordered flex items-center gap-2">


                            <input type="url" className="grow" placeholder="Photo Url"   />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required   />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className="text-xs text-center sm:px-6 dark:text-gray-600"> Have an account?
                    <Link to='/login' className="underline dark:text-gray-800">login page</Link>
                </p>
            </div>
        </div>
    </div>
    );
};

export default Register;
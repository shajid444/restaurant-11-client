
import { Link } from 'react-router-dom';
import './Banner.css'
const Banner = () => {


    return (
        <div className="hero min-h-screen rounded-xl " style={{ backgroundImage: 'url(https://i.ibb.co/NY1vjTF/volkan-vardar-1-H30u-RC1plc-unsplash.jpg)' }}>
            {/* <div className="bg-gradient-to-r from-cyan-500 to-blue-500"></div> */}
            
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md  bg-slate-600 bg-opacity-50">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <Link to='/allFood' className="btn btn-primary">All Food</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;
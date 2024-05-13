import { useLoaderData } from "react-router-dom";


const ViewDetails = () => {
    const details = useLoaderData();
    console.log(details);
    return (
        <div>
            
        </div>
    );
};

export default ViewDetails;
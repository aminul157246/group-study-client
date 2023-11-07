import { useLoaderData } from "react-router-dom";

const AssignmentDetails = () => {


    const assignmentDetails = useLoaderData()
    console.log(assignmentDetails);



    return (
        <div>
            
                    <img src={assignmentDetails.imageURL} alt="" />
                    <h2>{assignmentDetails.title}</h2>
                    <button className="btn">delete</button>
                    <button className="btn">take assignment</button>

                
        </div>
    );
};

export default AssignmentDetails;
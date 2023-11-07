import { useLoaderData } from "react-router-dom";
import Assignment from "./Assignment";

const Assignments = () => {


    const assignments = useLoaderData()
    // console.log(assignments);


    return (
        <div>
            <h2>Assignment Page</h2>
            {
                assignments.map(assignment => <Assignment key={assignment._id} assignment={assignment}></Assignment>)
            }
        </div>
    );
};

export default Assignments;
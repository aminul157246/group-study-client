import { useLoaderData } from "react-router-dom";
import Assignment from "./Assignment";


const Assignments = () => {

    const assignments = useLoaderData()
    console.log(assignments);


    return (
       <div>
         {
           
            <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-[#F2184F] mb-8">Assignment Page</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-3 gap-8 my-12">
            {
                assignments.map(assignment => <Assignment key={assignment._id} assignment={assignment}></Assignment>)
            }
            </div>
        </div>
        }
       </div>
    );
};

export default Assignments;
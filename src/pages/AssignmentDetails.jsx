import { useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const AssignmentDetails = () => {


    const assignmentDetails = useLoaderData()
    const [remainingAssign, setRemainingAssign] = useState(assignmentDetails)

    const handleDelete = deletedId => {

        fetch(`https://group-study-server-five.vercel.app/assignments/${deletedId}`, {

            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                toast('Deleted Successfully')
                if (data.deletedCount > 0) {
                    // remove all user from UI 
                    const remaining = remainingAssign.filter(ass => ass._id !== deletedId)
                    setRemainingAssign(remaining)

                }
            })
    }




    return (

           <div className="max-w-xl mx-auto">
             <div className="card  bg-base-100 shadow-xl">
                <figure><img className="h-[300px] w-[500px]" src={remainingAssign.imageURL} alt="Shoes" /></figure>
                <div className="card-body space-y-3  ">
                    <h2 className="card-title">Assignment Topic : {remainingAssign.title}</h2>
                    <p className="font-bold"> Mark : {remainingAssign.assignmentMarks}</p>
                    <p>{remainingAssign.description}</p>
                    <div className="card-actions flex gap-8">
                        <button onClick={() => handleDelete(remainingAssign._id)} className="text-white px-4 py-1 rounded-lg bg-[#F2184F]">Delete</button>
                        <button className="text-white px-4 py-1 rounded-lg bg-[#F2184F]">Take Assignment</button>
                    </div>
                </div>
            </div>
           </div>
    );
};

export default AssignmentDetails;
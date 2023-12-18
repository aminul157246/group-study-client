
const UpdateAssignment = () => {

    // const assignments = useLoaderData();
    // const {title,_id, assignmentMarks,description, imageURL} = assignments;
    // console.log(assignments);

    // const handleUpdateProduct = (id)=> {

    //     fetch(`https://localhost:5000/assignments/${id}`, {
    //     method : 'PUT', 
    //     headers : {
    //       "Content-Type": "application/json",
    //     },
    //     body : JSON.stringify(assignments )
    //   })
    
      
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log(data);
    //     if(data.modifiedCount>0){
    //       Swal.fire({
    //         title: 'Success!',
    //         text: 'Product  updated successfully ',
    //         icon: 'success',
    //         confirmButtonText: 'ok'
    //       })
    //     }
    //   })
    

    


    // } 



    return (
        <div>
           <div className=" p-8 max-w-4xl mx-auto ">
            <h2 className="text-5xl text-[#F2184F] text-center font-bold my-4"> Update Assignment </h2>

            <form >

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Title</span>
                    </label>
                    <input
                        type="text"
                           placeholder=" Assignment Title"
                        className="input input-bordered"
                        name="title"
                        required
                    />
                </div>

                <div className="form-control ">
                    <label className="label">
                        <span className="label-text">Mark</span>
                    </label>
                    <input
                        type="text"
                          placeholder="Assignment Mark"
                        className="input input-bordered"
                        name="mark"
                        required
                    />
                </div>

                <div className="form-control ">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input
                        type="text"
                          placeholder="Assignment Description"
                        className="input input-bordered"
                        name="description"
                        required
                    />
                </div>


                <div className="form-control ">
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <input
                        type="text"
                           placeholder="Assignment Image"
                        className="input input-bordered"
                        name="image"
                        required
                    />
                </div>
                <div className="flex justify-center">
                    <button  className="btn  mt-4">Update Assignment</button>
                </div>
            </form>
        </div>
        </div>
    );
};

export default UpdateAssignment;
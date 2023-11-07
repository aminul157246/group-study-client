import Swal from "sweetalert2";
const CreateAssignment = () => {
    const handleAddProduct = (event) => {
        event.preventDefault();
        //  title , description, mark , img 


        const form = event.target;
        const title = form.title.value;
        const mark = form.mark.value;
        const description = form.description.value;
        const image = form.image.value;
        const createdAssignment = {title, mark, description, image};
        console.log(createdAssignment);

        // send data in server from here
        fetch(" https://brand-shop-server-ij2rekxmp-aminul-islams-projects.vercel.app/products/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(createdAssignment),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Success!",
                        text: "Assignment created successfully.  😻 ",
                        icon: "success",
                        confirmButtonText: "ok",
                    });
                }
            });
    };

    return (
        <div className=" p-8 max-w-4xl mx-auto ">
            <h2 className="text-5xl text-[#F2184F] text-center font-bold my-4"> Create Assignment </h2>

            <form onSubmit={handleAddProduct}>

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
                    <button className="btn  mt-4">Create Assignment</button>
                </div>
            </form>
        </div>
    );
};

export default CreateAssignment;
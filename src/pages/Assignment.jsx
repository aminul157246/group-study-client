import { Link } from "react-router-dom";

const Assignment = ({assignment}) => {

    const {_id, title,imageURL,assignmentMarks
    } = assignment;
    

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={imageURL} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{assignmentMarks}</p>
    <div className="card-actions ">
      <Link to={`/assignments/${_id}`} className="bg-white">view details</Link>
      <button className="btn bg-[#F2184F]"></button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Assignment;
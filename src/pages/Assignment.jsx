import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Assignment = ({ assignment }) => {

  const { _id, description,title, imageURL,assignmentMarks
  } = assignment;
  return (

    <div className="card  bg-base-100 shadow-xl">
      <figure><img className="h-[250px] w-[300px]" src={imageURL} alt="Shoes" /></figure>
      <div className="card-body space-y-1">
        <h2 className="card-title">Assignment Topic : {title}</h2>
        <p className="font-bold"> Mark : {assignmentMarks}</p>
        <p>{description}</p>
        <div className="card-actions flex gap-8">
          <Link to={`/assignments/${_id}`} className="text-white px-4 py-1 rounded-lg bg-[#F2184F]">View Details</Link>
          <Link to={`/updateAssignment/${_id}`}  className="text-white px-4 py-1 rounded-lg bg-[#F2184F]">Update</Link>
        </div>
      </div>
    </div>
  );
};





Assignment.propTypes = {
        assignment : PropTypes.object,
}







export default Assignment;
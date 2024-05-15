import { Link } from 'react-router-dom';

const JobCard = ({ data }) => {
  const {
    _id,
    title,
    salary,
    photoURL,
    postingDeadline,
    applicationDeadline
  } = data;


  return (
    <div className="m-2">
      <div className="bg-base rounded-4 shadow-md hover:shadow-lg rounded-2xl p-3 transition-all overflow-hidden" data-aos="fade-up" data-aos-delay="200">
        <div className="flex items-center gap-5">
          <img className="w-[100px] rounded-full" src={photoURL} alt="User" />
          <h3 className="text-2xl font-bold">{title}</h3>
        </div>
        <div className="flex justify-around items-center w-full">
          <p>
            <span className="bg-gray-100 py-1 px-4 rounded-2xl">
              <span className="font-bold">Job Posting Date: </span>
              {postingDeadline}
            </span>
          </p>
          <p>
            <span className="bg-gray-100 py-1 px-4 rounded-2xl">
              <span className="font-bold">Application Deadline: </span>
              {applicationDeadline}
            </span>
          </p>
          <p>
            <span className="bg-gray-100 py-1 px-4 rounded-2xl">
              <span className="font-bold">Salary: </span>
              {salary}$
            </span>
          </p>
          <div>
            <Link to={`/data/${_id}`}>
              <button className="btn btn-ghost border-2 bg-green-500 text-white mt-5">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;


{/* <div
        className="flex flex-col md:flex-col lg:flex-row gap-5 md:p-5 bg-base rounded-4 shadow-2xl rounded-2xl p-3 hover:border-2 hover:border-green-500 transition-all overflow-hidden"
        data-aos="fade-up"
        data-aos-delay="200"
      ></div> */}
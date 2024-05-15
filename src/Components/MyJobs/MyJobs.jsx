import { Link } from 'react-router-dom';
import React, { useEffect, useState, useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../authProvider/AuthProvider';
import Swal from 'sweetalert2';

const MyJobs = ({ selfJob }) => {
  const { currentUser } = useContext(AuthContext);
  const [userSelfJobs, setUserSelfJobs] = useState([]);
  const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    if (currentUser?.email) {
      fetch(`https://my-job-server.vercel.app/jobs/${currentUser.email}`)
        .then(res => res.json())
        .then(data => {
          setUserSelfJobs(data);
        })
        .catch(error => {
          console.error('Error fetching user Jobs:', error);
        });
    }
  }, [currentUser, refetch]);

  const handleDelete = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`https://my-job-server.vercel.app/job/${id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              setRefetch(!refetch); // Trigger refetching
              Swal.fire('Deleted!', 'Your Job has been deleted.', 'success');
            } else {
              Swal.fire('Error!', 'Deletion failed.', 'error');
            }
          })
          .catch(error => {
            console.error('Error deleting Job:', error);
            Swal.fire('Error!', 'An error occurred while deleting.', 'error');
          });
      }
    });
  };

  return (
    <div className="mt-[100px]">
      <Helmet>
        <title>My Job</title>
      </Helmet>

      <div className="text-4xl lg:text-6xl font-bold p-2 lg:p-10 bg-green-500 text-white mb-20 h-[300px] flex justify-center items-center">
        <h2 className="animate__animated animate__fadeInLeft">My Job</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-4 m-10">
        {userSelfJobs.map(selfJob => (
          <div key={selfJob._id}>
            <div className="flex flex-col md:flex-row gap-5 p-5 bg-base rounded-lg shadow-xl">
              <div className="flex md:flex-col justify-around w-fll">
                <img
                  className="rounded-xl"
                  src={selfJob.photoURL}
                  alt={selfJob.displayName}
                />
                <div>
                  <h3 className="mt-4 mb-2 text-2xl font-bold">
                    {selfJob.displayName}
                  </h3>
                  <h3 className="mt-4 mb-2 font-bold">{selfJob.title}</h3>
                </div>
              </div>
              <div className="flex flex-row justify-around items-center w-full pr-4">
                <div className="space-y-5">
                  <h3 className="mt-4 mb-2 font-bold">{selfJob.category}</h3>
                  <p>
                    <span className="font-bold">P.Date </span>
                    {selfJob.postingDeadline}
                  </p>
                  <p>
                    <span className="font-bold">A.Date </span>
                    {selfJob.applicationDeadline}
                  </p>
                  <p>
                    <span className="font-bold">Salary: </span> {selfJob.salary}
                    $
                  </p>
                </div>
                <div className="flex flex-col justify-between items-center mt-5 gap-5">
                  <Link to={`/dataArt/${selfJob._id}`}>
                    <button className="btn bg-green-500 text-white">
                      Update
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(selfJob._id)}
                    className="btn bg-orange-500 text-white"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyJobs;

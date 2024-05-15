import { Helmet } from 'react-helmet-async';
import { useContext } from 'react';
import { AuthContext } from '../authProvider/AuthProvider';
import Swal from 'sweetalert2';

const AddJob = () => {
  const { currentUser } = useContext(AuthContext);

  const handleAddJob = event => {
    event.preventDefault();

    const form = event.target;

    const title = form.title.value;
    const category = form.category.value;
    const salary = form.salary.value;
    const number = form.number.value;
    const postingDeadline = form.postingDeadline.value;
    const applicationDeadline = form.applicationDeadline.value;
    const status = form.status.value;
    const description = form.description.value;
    const displayName = currentUser.displayName;
    const email = currentUser.email;
    const photoURL = currentUser.photoURL;

    const newJob = {
      title,
      category,
      salary,
      number,
      postingDeadline,
      applicationDeadline,
      status,
      photoURL,
      description,
      displayName,
      email,
    };

    // Send data to the server to add the new craft item
    fetch('https://my-job-server.vercel.app/job', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data); // Log the server's response
        if (data.insertedId) {
          // Correct condition to check for successful insertion
          Swal.fire({
            title: 'Success!',
            text: 'Job added successfully!',
            icon: 'success',
            confirmButtonText: 'Cool',
          });
        } else {
          Swal.fire({
            title: 'Error',
            text: 'Failed to add Job',
            icon: 'error',
            confirmButtonText: 'OK',
          });
        }
      })
      .catch(error => {
        console.error('Error adding Job:', error);
        Swal.fire({
          title: 'Error!',
          text: 'An error occurred while adding the Job.',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      });
  };

  return (
    <div>
      <Helmet>
        <title>Add A Job</title>
      </Helmet>

      <div className="mt-[100px] justify-center bg-green-100">
        <div className="text-4xl lg:text-6xl font-bold p-2 lg:p-10 bg-green-500 text-white mb-20 h-[300px] flex justify-center items-center">
          <h2 className="animate__animated animate__fadeInLeft">Add A Job</h2>
        </div>

        <form className="p-10 md:px-40" onSubmit={handleAddJob}>
          <div className="md:flex gap-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Job Title</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="title"
                  placeholder="Job Title"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Category Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="category"
                  placeholder="category Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="md:flex gap-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Job Posting Date</span>
              </label>
              <label className="input-group">
                <input
                  type="date"
                  name="postingDeadline"
                  placeholder="Posting Date"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">
                  Application Deadline
                </span>
              </label>
              <label className="input-group">
                <input
                  type="date"
                  name="applicationDeadline"
                  placeholder="Application Deadline"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="md:flex gap-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">
                  Job Applicants Number
                </span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  name="number"
                  placeholder="Job Applicants Number"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Job Status</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="status"
                  placeholder="Full Time Or Part Time"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="md:flex gap-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Salary range</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="salary"
                  placeholder="Salary range"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Short Description</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="description"
                  placeholder="Write Details"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <input
            type="submit"
            value="Add A Job"
            className="btn btn-neutral w-full mt-5"
          />
        </form>
      </div>
    </div>
  );
};

export default AddJob;

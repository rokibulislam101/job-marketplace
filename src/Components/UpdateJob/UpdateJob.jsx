import { useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useContext } from 'react';
import { AuthContext } from '../authProvider/AuthProvider';
import Swal from 'sweetalert2';

const UpdateJob = () => {
  const data = useLoaderData();
  const {
    _id,
    title,
    category,
    salary,
    number,
    postingDeadline,
    applicationDeadline,
    status,
    description,
  } = data;

  const { currentUser } = useContext(AuthContext);
  const handleUpdateJob = event => {
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

    const updatedJob = {
      title,
      category,
      salary,
      number,
      postingDeadline,
      applicationDeadline,
      status,
      description,
    };
    console.log(updatedJob);

    //send data to the server
    fetch(`http://localhost:5000/job/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updatedJob),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: 'Success!',
            text: 'Job Updated Successfully',
            icon: 'success',
            confirmButtonText: 'Cool',
          });
        }
      });
  };

  return (
    <div>
      <Helmet>
        <title>Update Job</title>
      </Helmet>
      <div className="mt-[100px] justify-center bg-green-100">
        <div className="text-4xl lg:text-6xl font-bold p-2 lg:p-10 bg-green-500 text-white mb-20 h-[300px] flex justify-center items-center">
          <h2 className="animate__animated animate__fadeInLeft">Update A Job</h2>
        </div>
        <form className="p-10" onSubmit={handleUpdateJob}>
          <div className="md:flex gap-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Job Title</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="title"
                  defaultValue={title}
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
                  defaultValue={category}
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
                  defaultValue={postingDeadline}
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
                  defaultValue={applicationDeadline}
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
                  defaultValue={number}
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
                  defaultValue={status}
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
                  defaultValue={salary}
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
                  defaultValue={description}
                  placeholder="Write Details"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <input
            type="submit"
            value="Update A Job"
            className="btn btn-neutral w-full mt-5"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateJob;


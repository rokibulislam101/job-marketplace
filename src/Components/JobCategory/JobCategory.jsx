import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import DatePicker from 'react-datepicker';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Link } from 'react-router-dom';

const JobCategory = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    // Fetch data from the database link
    axios
      .get('http://localhost:5000/job')
      .then(response => {
        // Set the fetched data to the state
        setJobs(response.data);
        // Initially, display all jobs
        setFilteredJobs(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const filterJobsByCategory = category => {
    if (category === 'All Jobs') {
      // Display all jobs
      setFilteredJobs(jobs);
    } else if (category === 'New') {
      // Filter jobs posted within the last two days
      const twoDaysAgo = new Date();
      twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);
      const filtered = jobs.filter(job => {
        const postingDeadline = new Date(job.postingDeadline);
        return postingDeadline >= twoDaysAgo;
      });
      setFilteredJobs(filtered);
    } else {
      // Filter jobs by category
      const filtered = jobs.filter(job => job.status === category);
      setFilteredJobs(filtered);
    }
  };

  return (
    <div className="mt-[68px]">
      <h1 className="text-4xl text-center font-bold text-green-500">
        Job By Category
      </h1>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-5">
        <Tabs className="sm:w-4/5">
          <TabList className="flex my-5 justify-center gap-3">
            <Tab
              className="py-2 px-4 bg-gray-200 rounded-t-lg cursor-pointer"
              onClick={() => filterJobsByCategory('All Jobs')}
            >
              All Jobs
            </Tab>
            <Tab
              className="py-2 px-4 bg-gray-200 rounded-t-lg cursor-pointer"
              onClick={() => filterJobsByCategory('New')}
            >
              New Jobs
            </Tab>
            <Tab
              className="py-2 px-4 bg-gray-200 rounded-t-lg cursor-pointer"
              onClick={() => filterJobsByCategory('Full Time')}
            >
              Full Time Jobs
            </Tab>
            <Tab
              className="py-2 px-4 bg-gray-200 rounded-t-lg cursor-pointer"
              onClick={() => filterJobsByCategory('Part Time')}
            >
              Part Time Jobs
            </Tab>
          </TabList>

          <TabPanel>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {filteredJobs.map(job => (
                <div
                  key={job._id}
                  className="flex justify-between gap-4 border border-gray-200 rounded-lg p-4"
                >
                  <div>
                    <h2 className="text-lg font-bold mb-2">
                      {job.displayName}
                    </h2>
                    <p className="text-gray-600 mb-2 font-semibold">
                      {job.title}
                    </p>
                    <p className="text-gray-600 mb-2 font-semibold">
                      {job.number}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-2 font-semibold">
                      P.D {job.postingDeadline}
                    </p>
                    <p className="text-gray-600 mb-2 font-semibold">
                      A.D {job.applicationDeadline}
                    </p>
                    <p className="text-gray-600 mb-2 font-semibold">
                      Salary: ${job.salary}
                    </p>
                  </div>
                  <Link to={`/data/${job._id}`}>
                    <button className="btn btn-ghost border-2 bg-green-500 text-white mt-5">
                      View Details
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </TabPanel>

          <TabPanel>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {filteredJobs
                .filter(job => job.status === 'New')
                .map(job => (
                  <div
                    key={job._id}
                    className="flex justify-between gap-4 border border-gray-200 rounded-lg p-4"
                  >
                    <div>
                      <h2 className="text-lg font-bold mb-2">
                        {job.displayName}
                      </h2>
                      <p className="text-gray-600 mb-2 font-semibold">
                        {job.title}
                      </p>
                      <p className="text-gray-600 mb-2 font-semibold">
                        {job.number}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-600 mb-2 font-semibold">
                        P.D {job.postingDeadline}
                      </p>
                      <p className="text-gray-600 mb-2 font-semibold">
                        A.D {job.applicationDeadline}
                      </p>
                      <p className="text-gray-600 mb-2 font-semibold">
                        Salary: ${job.salary}
                      </p>
                    </div>
                    <Link to={`/data/${job._id}`}>
                      <button className="btn btn-ghost border-2 bg-green-500 text-white mt-5">
                        View Details
                      </button>
                    </Link>
                  </div>
                ))}
            </div>
          </TabPanel>

          <TabPanel>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {filteredJobs
                .filter(job => job.status === 'Full Time')
                .map(job => (
                  <div
                    key={job._id}
                    className="flex justify-between gap-4 border border-gray-200 rounded-lg p-4"
                  >
                    <div>
                      <h2 className="text-lg font-bold mb-2">
                        {job.displayName}
                      </h2>
                      <p className="text-gray-600 mb-2 font-semibold">
                        {job.title}
                      </p>
                      <p className="text-gray-600 mb-2 font-semibold">
                        {job.number}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-600 mb-2 font-semibold">
                        P.D {job.postingDeadline}
                      </p>
                      <p className="text-gray-600 mb-2 font-semibold">
                        A.D {job.applicationDeadline}
                      </p>
                      <p className="text-gray-600 mb-2 font-semibold">
                        Salary: ${job.salary}
                      </p>
                    </div>
                    <Link to={`/data/${job._id}`}>
                      <button className="btn btn-ghost border-2 bg-green-500 text-white mt-5">
                        View Details
                      </button>
                    </Link>
                  </div>
                ))}
            </div>
          </TabPanel>

          <TabPanel>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {filteredJobs
                .filter(job => job.status === 'Part Time')
                .map(job => (
                  <div
                    key={job._id}
                    className="flex justify-between gap-4 border border-gray-200 rounded-lg p-4"
                  >
                    <div>
                      <h2 className="text-lg font-bold mb-2">
                        {job.displayName}
                      </h2>
                      <p className="text-gray-600 mb-2 font-semibold">
                        {job.title}
                      </p>
                      <p className="text-gray-600 mb-2 font-semibold">
                        {job.number}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-600 mb-2 font-semibold">
                        P.D {job.postingDeadline}
                      </p>
                      <p className="text-gray-600 mb-2 font-semibold">
                        A.D {job.applicationDeadline}
                      </p>
                      <p className="text-gray-600 mb-2 font-semibold">
                        Salary: ${job.salary}
                      </p>
                    </div>
                    <Link to={`/data/${job._id}`}>
                      <button className="btn btn-ghost border-2 bg-green-500 text-white mt-5">
                        View Details
                      </button>
                    </Link>
                  </div>
                ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default JobCategory;

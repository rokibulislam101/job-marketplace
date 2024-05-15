import { useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import JobCard from '../JobCard/JobCard'; // Ensure this path is correct

const AllJobs = () => {
  const jobs = useLoaderData(); // Use data from loader AddJob

  return (
    <div className="mt-[100px]">
      <Helmet>
        <title>All Jobs</title>
      </Helmet>
      <div className="text-4xl lg:text-6xl font-bold p-2 lg:p-10 bg-green-500 text-white mb-20 h-[300px] flex justify-center items-center">
        <h2 className="animate__animated animate__fadeInLeft">
          All Jobs: {jobs.length}
        </h2>
      </div>

      <div className="gap-4 m-10">
        {jobs.map(data => (
          <JobCard key={data.id} data={data}></JobCard>
        ))}
      </div>
    </div>
  );
};

export default AllJobs; 

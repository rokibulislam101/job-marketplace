import { useLoaderData } from 'react-router-dom';
import Slider from '../Slider/Slider';
import JobCategory from '../JobCategory/JobCategory';
import SubBlogs from '../SubBlogs/SubBlogs';
import OnlineMarket from '../OnlineMarket/OnlineMarket';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  const datas = useLoaderData();

  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <Slider></Slider>

      <JobCategory></JobCategory>

      <OnlineMarket></OnlineMarket>

      <div className="my-[80px]">
        <h1
          className="text-center textile text-4xl mb-6 font-bold text-green-500"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Some Buyer Profile
        </h1>
        <p className="text-center">
          Values durability, functionality, and performance in outdoor gear and equipment.
        </p>
        <div className="sm:flex sm:col-wrap justify-around  m-10">
          {datas.slice(0, 4).map(data => (
            <SubBlogs key={data.id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

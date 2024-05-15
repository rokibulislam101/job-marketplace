import { Helmet } from 'react-helmet-async';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const TextileArts = () => {
  const dataItem = useLoaderData();
  // const { id } = useParams();

  return (
    <div>
      <Helmet>
        <title>Job Details</title>
      </Helmet>
      <div className="mt-[100px]">
        <div className="text-4xl lg:text-6xl font-bold p-2 lg:p-10 bg-green-500 text-white mb-20 h-[300px] flex justify-center items-center">
          <h2 className="animate__animated animate__fadeInLeft">
            Single Job Details
          </h2>
        </div>

        <div className="m-10 p-5 md:p-10 flex justify-center items-center flex-col shadow-2xl rounded-2xl">
          <div className="w-full md:flex md:gap-10">
            <img
              className="md:w-1/2 rounded-2xl"
              data-aos="fade-up"
              data-aos-delay="200"
              src={dataItem.image}
              alt=""
            />
            <div>
              <h2
                className="text-4xl lg:text-5xl font-bold text-green-500 my-10"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                {dataItem.name}
              </h2>
              <h4
                className="text-2xl my-10"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <span className="font-bold">Subcategory:</span> {dataItem.subcategory}
              </h4>
              <hr />
              <p
                className="text-xl my-5"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <span className="font-bold">Description:</span> {dataItem.description}
              </p>
              <hr />
              <div
                className="my-5 space-x-1 flex text-wrap lg:flex-row lg:gap-5"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <p>
                  <span className="text-xl font-bold">Customization:</span>
                  <span className="bg-orange-100 py-1 px-5 text-lg rounded-2xl">
                    {dataItem.customization}
                  </span>
                </p>
              </div>
              <hr />
              <div
                className="my-5 space-x-5 flex flex-col lg:flex-row gap-5"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <p>
                  <span className="text-xl font-bold">Processing Time:</span>
                  <span className="bg-orange-100 py-1 px-5 text-lg rounded-2xl">
                    {dataItem.time}
                  </span>
                </p>
                <p>
                  <span className="text-xl font-bold">Price:</span>
                  <span className="bg-orange-100 py-1 px-5 text-lg rounded-2xl">
                    {dataItem.price}$
                  </span>
                </p>
              </div>
              <hr />
              <div
                className="my-5 space-x-5 flex flex-col lg:flex-row gap-5"
                data-aos="fade-up"
                data-aos-delay="1000"
              >
                <p>
                  <span className="text-xl font-bold">Stock Status:</span>
                  <span className="bg-orange-100 py-1 px-5 text-lg rounded-2xl">
                    {dataItem.status}
                  </span>
                </p>
                <p>
                  <span className="text-xl font-bold">Rating:</span>
                  <span className="bg-orange-100 py-1 px-5 text-lg rounded-2xl">
                    {dataItem.rating}
                  </span>
                </p>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextileArts;

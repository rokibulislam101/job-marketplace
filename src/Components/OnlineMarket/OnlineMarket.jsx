import artImg from '../../assets/images/onlineMarket.png';

const OnlineMarket = () => {
  return (
    <div className="bg-gray-800" data-aos="fade-up" data-aos-delay="200">
      <div className="md:flex justify-center items-center gap-16 p-20 my-20">
        <div className="md:w-1/2 text-white">
          <h1 className="font-bold text-4xl mb-5">
            What is Online Job Marketplace?
          </h1>
          <p>
            An online job marketplace is a digital platform where employers and
            job seekers connect to facilitate the hiring process. These
            marketplaces typically host a wide range of job listings across
            various industries and skill levels, allowing job seekers to search
            and apply for positions that match their qualifications and
            interests.
          </p>
        </div>
        <div className="rounded-2xl md:w-[600px] mt-10 md:mt-0">
          <img className="w-full" src={artImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default OnlineMarket;

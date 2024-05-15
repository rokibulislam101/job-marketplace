import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/bundle";
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import slider1 from '../../assets/images/job-1.jpg';
import slider2 from '../../assets/images/job-2.jpg';
import slider3 from '../../assets/images/job-3.jpg';
import slider4 from '../../assets/images/job-4.jpg';

const Slider = () => {
    return (
        <div>
            <Swiper
                navigation={true}
                pagination={{ clickable: true }}
                modules={[Navigation, Autoplay, Pagination]}
                autoplay={{ delay: 2500 }}
                className="mySwiper h-[800px]"
                loop={true}
            >
                <SwiperSlide>
                    <img src={slider1} className="w-full rounded-xl" />
                    <div className="absolute rounded-xl inset-0 flex justify-center items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0 )]">
                        <div className='text-white space-y-7 text-center sm:px-48'>
                            <h2 className='text-6xl font-bold'>Digital Experience Architect</h2>
                            <p>We're seeking a visionary Digital Experience Architect to lead the design and development of innovative digital solutions. In this role, you'll blend creativity with technical expertise to shape the future of our digital presence.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider2} className="w-full rounded-xl" />
                    <div className="absolute rounded-xl inset-0 flex justify-center items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0 )]">
                        <div className='text-white space-y-7 text-center sm:px-48'>
                            <h2 className='text-6xl font-bold'>Sustainability Specialist</h2>
                            <p>Description: Join our team as a Sustainability Specialist and make a meaningful impact by developing and implementing eco-friendly initiatives to reduce our environmental footprint.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider3} className="w-full rounded-xl" />
                    <div className="absolute rounded-xl inset-0 flex justify-center items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0 )]">
                        <div className='text-white space-y-7 text-center sm:px-48'>
                            <h2 className='text-6xl font-bold'>Happiness Coordinator</h2>
                            <p>Spread joy and positivity as our Happiness Coordinator, responsible for organizing fun events, fostering team camaraderie, and ensuring a supportive and uplifting work environment for all.

</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider4} className="w-full rounded-xl" />
                    <div className="absolute rounded-xl inset-0 flex justify-center items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0 )]">
                        <div className='text-white space-y-7 text-center sm:px-48'>
                            <h2 className='text-6xl font-bold'>Community Engagement Guru</h2>
                            <p>Foster meaningful connections and cultivate a thriving community around our brand as our Community Engagement Guru, building relationships, and driving engagement both online and offline.</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;

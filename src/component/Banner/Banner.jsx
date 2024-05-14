
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
const Banner = () => {


    return (
        <>
            <Swiper 
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper rounded-xl"
            >
                <SwiperSlide>
                    <div
                        className='w-full bg-center bg-cover h-[38rem]'
                        style={{
                            backgroundImage: `url("https://i.ibb.co/zHsmmDN/ivan-torres-MQUqbmsz-GGM-unsplash.jpg")`,
                        }}
                    >
                        <div className='flex items-center justify-center w-full h-full bg-gray-900/70'>
                            <div className='text-center'>
                                <h1 className='text-3xl font-semibold text-white lg:text-4xl'>
                                    Explore <span className='text-blue-400'>Our</span> Food
                                </h1>
                                <br />
                                <Link to ='/allFood' className='w-full px-5 py-4 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-gray-600 rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500'>
                                    All Food
                                </Link>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                <div
                        className='w-full bg-center bg-cover h-[38rem]'
                        style={{
                            backgroundImage: `url("https://i.ibb.co/bNSnSZ4/ric-matkowski-T8-SD7bwyx-HU-unsplash.jpg")`,
                        }}
                    >
                        <div className='flex items-center justify-center w-full h-full bg-gray-900/70'>
                            <div className='text-center'>
                                <h1 className='text-3xl font-semibold text-white lg:text-4xl'>
                                    Build your new <span className='text-blue-400'>Saas</span> Project
                                </h1>
                                <br />
                                <Link to ='/allFood' className='w-full px-5 py-4 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-gray-600 rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500'>
                                    All Food
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div
                        className='w-full bg-center bg-cover h-[38rem]'
                        style={{
                            backgroundImage: `url("https://i.ibb.co/jHQhRKn/anthony-espinosa-In-CMGusi-Av-A-unsplash.jpg")`,
                        }}
                    >
                        <div className='flex items-center justify-center w-full h-full bg-gray-900/70'>
                            <div className='text-center'>
                            <h1 className='text-3xl font-semibold text-white lg:text-4xl'>
                                    Explore <span className='text-blue-400'>Our</span> Food
                                </h1>
                                <br />
                                <Link to ='/allFood' className='w-full px-5 py-4 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-gray-600 rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500'>
                                    All Food
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div
                        className='w-full bg-center bg-cover h-[38rem]'
                        style={{
                            backgroundImage: `url("https://i.ibb.co/YbQyfC4/nicholas-grande-d9jc-PTRD9fo-unsplash.jpg")`,
                        }}
                    >
                        <div className='flex items-center justify-center w-full h-full bg-gray-900/70'>
                            <div className='text-center'>
                            <h1 className='text-3xl font-semibold text-white lg:text-4xl'>
                                    Explore <span className='text-blue-400'>Our</span> Food
                                </h1>
                                <br />
                                <Link to ='/allFood' className='w-full px-5 py-4 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-gray-600 rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500'>
                                    All Food
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
              
            </Swiper>
        </>
    );
};

export default Banner;
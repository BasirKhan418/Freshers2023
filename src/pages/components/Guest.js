import React from 'react'
import {  Pagination,A11y, Autoplay} from "swiper";

import { Swiper, SwiperSlide} from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Guest = () => {
  return (
    <>
      <div className='bg-black font-bold flex justify-center flex-col items-center my-2' id="guest">
      <h1 className='font text-4xl text-white'>
        Our Event Guests
      </h1>
      <div className='h-1 w-44 bg-yellow-600 rounded-3xl my-2'></div>
    </div>
    <section className="bg-black ">
    <div className="container px-6 py-2 ">
    
        <div className="">
          
            <Swiper
        // install Swiper modules
        modules={[ Pagination, A11y, Autoplay]}
        autoplay={{
          delay: 3000, // 3 seconds delay between slides
          disableOnInteraction: false, // enable autoplay even when user interacts with the carousel
        }}
        breakpoints={{
            893: {
              width: 975,
              slidesPerView: 2,
            },
            500: {
                width: 893,
                slidesPerView: 2,
              },
              0: {
                width: 550,
                slidesPerView: 1,
              },
          }}
        spaceBetween={6}
        slidesPerView={4}
        pagination={{ clickable: true }}
      >
                <SwiperSlide className=''>
                <div className="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer group hover:bg-blue-600 rounded-xl border-2 border-gray-900 bg-gray-900 w-80 h-72">
                <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src="https://cutm.ac.in/wp-content/uploads/2020/01/supriya-610x520.jpg" alt=""/>

                <h1 className="mt-4 text-2xl font-semibold capitalize text-white group-hover:text-white">Supriya Pattanayak</h1>

                <p className="mt-2  capitalize dark:text-gray-300 group-hover:text-gray-300">Vice-Chancellor (CUTM)</p>

            </div>
            </SwiperSlide>
            <SwiperSlide className=''>
                <div className="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer group hover:bg-blue-600 rounded-xl border-2 border-gray-900 bg-gray-900 w-80 h-72">
                <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src="https://cutm.ac.in/wp-content/uploads/2020/01/Jagannath-Padhi-610x520.jpg" alt=""/>

                <h1 className="mt-4 text-2xl font-semibold capitalize text-white group-hover:text-white">Prof. Jagannath Padhi</h1>

                <p className="mt-2  capitalize dark:text-gray-300 group-hover:text-gray-300"> Director, CIT </p>

            </div>
            </SwiperSlide>
            <SwiperSlide className=''>
                <div className="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer group hover:bg-blue-600 rounded-xl border-2 border-gray-900 bg-gray-900 w-80 h-72 ">
                <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src="https://media.licdn.com/dms/image/C5603AQGPbo7pQq0pnQ/profile-displayphoto-shrink_800_800/0/1634546971282?e=1702512000&v=beta&t=NDiQU18nvdogpXJ0S7qdwH6kWW65PTm52JJvXT_RZ6s" alt=""/>

                <h1 className="mt-4 text-2xl font-semibold capitalize text-white group-hover:text-white">Dr. A. M. Mohanty</h1>

                <p className="mt-2  capitalize dark:text-gray-300 group-hover:text-gray-300">Pro Vice Chancellor(CUTM)</p>

            </div>
            </SwiperSlide>
               <SwiperSlide className=''>
                <div className="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer group hover:bg-blue-600 rounded-xl border-2 border-gray-900 bg-gray-900 w-80 h-72 ">
                <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src="https://cutm.ac.in/wp-content/uploads/Sujata-Chakravarty.jpg" alt=""/>

                <h1 className="mt-4 text-2xl font-semibold capitalize text-white group-hover:text-white">Dr. Sujata Chakravarty</h1>

                <p className="mt-2  capitalize dark:text-gray-300 group-hover:text-gray-300">Dean, SoET, BBSR</p>

            </div>
            </SwiperSlide>
             <SwiperSlide className=''>
                <div className="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer group hover:bg-blue-600 rounded-xl border-2 border-gray-900 bg-gray-900 w-96 h-72">
                <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src="https://cutm.ac.in/wp-content/uploads/Sangram-Swain.jpg" alt=""/>

                <h1 className="mt-4 text-2xl font-semibold capitalize text-white group-hover:text-white">Dr. Sangram Keshari Swain</h1>

                <p className="mt-2  capitalize dark:text-gray-300 group-hover:text-gray-300">Dean, Students’ Welfare, CUTM, BBSR</p>

            </div>
            </SwiperSlide>
          
      </Swiper>


            {/* <div className="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer group hover:bg-blue-600 rounded-xl border-2 border-gray-900 bg-gray-900">
                <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt=""/>

                <h1 className="mt-4 text-2xl font-semibold capitalize text-white group-hover:text-white">arthur melo</h1>

                <p className="mt-2  capitalize dark:text-gray-300 group-hover:text-gray-300">design director</p>
            </div> */}
          

        
        </div>
    </div>
</section>
    </>
  
  )
}

export default Guest

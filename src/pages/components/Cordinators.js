import React from 'react'
import {  Pagination,A11y, Autoplay} from "swiper";

import { Swiper, SwiperSlide} from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Cordinator = () => {
  return (
    <>
      <div className='bg-black font-bold flex justify-center flex-col items-center my-2' id="co-ordinator">
      <h1 className='font text-4xl text-white'>
        Our Event Co-Ordinator
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
                <div className="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer group hover:bg-blue-600 rounded-xl border-2 border-gray-900 bg-gray-900 w-80 h-72 justify-center">
                <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src="https://res.cloudinary.com/dawzncoau/image/upload/v1697014512/IMG_20230322_190356_go5vcv.jpg" alt=""/>

                <h1 className="mt-4 text-2xl font-semibold capitalize text-white group-hover:text-white">Safal Mondal
</h1>

                <p className="mt-2 dark:text-gray-300 group-hover:text-gray-300">220301120072@cutm.ac.in</p>
                <p className="mt-2 dark:text-gray-300 group-hover:text-gray-300">Dept-CSE</p>

            </div>
            </SwiperSlide>
            <SwiperSlide className=''>
                <div className="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer group hover:bg-blue-600 rounded-xl border-2 border-gray-900 bg-gray-900 w-80 h-72">
                <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src="https://res.cloudinary.com/dawzncoau/image/upload/v1697014367/20230303_171510_qxpyxf.jpg" alt=""/>

                <h1 className="mt-4 text-2xl font-semibold capitalize text-white group-hover:text-white">NYAYABRATA DAS</h1>

                <p className="mt-2 dark:text-gray-300 group-hover:text-gray-300"> 220301120191@cutm.ac.in</p>
                <p className="mt-2 dark:text-gray-300 group-hover:text-gray-300"> Dept-CSE</p>

            </div>
            </SwiperSlide>
            <SwiperSlide className=''>
                <div className="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer group hover:bg-blue-600 rounded-xl border-2 border-gray-900 bg-gray-900 w-80 h-72 ">
                <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src="https://res.cloudinary.com/dawzncoau/image/upload/v1693088386/o0xkny79eysspg8vaiow.jpg" alt=""/>

                <h1 className="mt-4 text-2xl font-semibold capitalize text-white group-hover:text-white">BASIR KHAN</h1>

                <p className="mt-2   dark:text-gray-300 group-hover:text-gray-300">220301120209@cutm.ac.in</p>
                <p className="mt-2  dark:text-gray-300 group-hover:text-gray-300">Dept-CSE</p>

            </div>
            </SwiperSlide>
               <SwiperSlide className=''>
                <div className="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer group hover:bg-blue-600 rounded-xl border-2 border-gray-900 bg-gray-900 w-80 h-72 ">
                <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src="https://res.cloudinary.com/dawzncoau/image/upload/v1697014353/ae8eba3c-e539-4520-b659-7f82816c8e54_jby6z3.jpg" alt=""/>

                <h1 className="mt-4 text-2xl font-semibold capitalize text-white group-hover:text-white">Swapnil Ray 
</h1>

                <p className="mt-2 dark:text-gray-300 group-hover:text-gray-300">220301120295@gmail.com</p>
                <p className="mt-2 dark:text-gray-300 group-hover:text-gray-300">Dept-CSE</p>

            </div>
            </SwiperSlide>
             <SwiperSlide className=''>
                <div className="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer group hover:bg-blue-600 rounded-xl border-2 border-gray-900 bg-gray-900 w-96 h-72">
                <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src="https://res.cloudinary.com/dawzncoau/image/upload/v1697014511/WhatsApp_Image_2023-10-11_at_09.25.52_e7953db5_mtx7js.jpg" alt=""/>

                <h1 className="mt-4 text-2xl font-semibold capitalize text-white group-hover:text-white">Smrutirupa Parida
</h1>

                <p className="mt-2 dark:text-gray-300 group-hover:text-gray-300">220301120197@cutm.ac.in</p>
                <p className="mt-2 dark:text-gray-300 group-hover:text-gray-300">Dept-CSE</p>

            </div>
            </SwiperSlide>
            <SwiperSlide className=''>
                <div className="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer group hover:bg-blue-600 rounded-xl border-2 border-gray-900 bg-gray-900 w-96 h-72">
                <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src="https://res.cloudinary.com/dawzncoau/image/upload/v1697014497/1696771778733_ic19pj.jpg" alt=""/>

                <h1 className="mt-4 text-2xl font-semibold capitalize text-white group-hover:text-white">Satyajit Pradhan
</h1>

                <p className="mt-2 dark:text-gray-300 group-hover:text-gray-300">220301150002@cutm.ac.in</p>
                <p className="mt-2 dark:text-gray-300 group-hover:text-gray-300">Dept-EEE</p>

            </div>
            </SwiperSlide>
            <SwiperSlide className=''>
                <div className="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer group hover:bg-blue-600 rounded-xl border-2 border-gray-900 bg-gray-900 w-96 h-72">
                <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src="https://res.cloudinary.com/dawzncoau/image/upload/v1697014511/IMG_20231011_010455_zm1t5l.jpg" alt=""/>

                <h1 className="mt-4 text-2xl font-semibold capitalize text-white group-hover:text-white">Choudhury Subhashis Dash
</h1>

                <p className="mt-2 dark:text-gray-300 group-hover:text-gray-300">220301130001@cutm.ac.in</p>
                <p className="mt-2 dark:text-gray-300 group-hover:text-gray-300">Dept-ECE</p>

            </div>
            </SwiperSlide>
            <SwiperSlide className=''>
                <div className="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer group hover:bg-blue-600 rounded-xl border-2 border-gray-900 bg-gray-900 w-96 h-72">
                <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src="https://res.cloudinary.com/dawzncoau/image/upload/v1697015787/Screenshot_2023-10-11_144535_mwfo2g.png" alt=""/>

                <h1 className="mt-4 text-2xl font-semibold capitalize text-white group-hover:text-white">Shibashankar Mohanty

</h1>

                <p className="mt-2 dark:text-gray-300 group-hover:text-gray-300">220301160001@cutm.ac.in</p>
                <p className="mt-2 dark:text-gray-300 group-hover:text-gray-300">Dept-MECHANICAL</p>

            </div>
            </SwiperSlide>
            <SwiperSlide className=''>
                <div className="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer group hover:bg-blue-600 rounded-xl border-2 border-gray-900 bg-gray-900 w-96 h-72">
                <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src="https://res.cloudinary.com/dawzncoau/image/upload/v1697015954/IMG_20230917_104800_908_h216fg.webp" alt=""/>

                <h1 className="mt-4 text-2xl font-semibold capitalize text-white group-hover:text-white">Asis Asutosha Mishra


</h1>

                <p className="mt-2 dark:text-gray-300 group-hover:text-gray-300">220301120174@cutm.ac.in</p>
                <p className="mt-2 dark:text-gray-300 group-hover:text-gray-300">Dept-CSE</p>

            </div>
            </SwiperSlide>
            <SwiperSlide className=''>
                <div className="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer group hover:bg-blue-600 rounded-xl border-2 border-gray-900 bg-gray-900 w-96 h-72">
                <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src="https://res.cloudinary.com/dawzncoau/image/upload/v1697014511/DSC_0046_i9jldu.jpg" alt=""/>

                <h1 className="mt-4 text-2xl font-semibold capitalize text-white group-hover:text-white">Sunny sahu 


</h1>

                <p className="mt-2 dark:text-gray-300 group-hover:text-gray-300">220301190001@cutm.ac.in</p>
                <p className="mt-2 dark:text-gray-300 group-hover:text-gray-300">Dept-Mining</p>

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

export default Cordinator

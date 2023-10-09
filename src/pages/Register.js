import React, { useState } from 'react'
import { TbSchool ,TbSchoolOff} from 'react-icons/tb';

const Register = () => {
    const [fresh, setFresh] = useState(true);

  return (
    <div>
      <section className="bg-gray-900 py-12">
    <div className="flex justify-center min-h-screen">
        <div className="hidden bg-cover lg:block lg:w-2/5" style={{backgroundImage: "url('/home.jpg')"}}>
        </div>

        <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
            <div className="w-full">
                <h1 className="text-2xl font-semibold tracking-wider capitalize text-white">
                    Register For Fresher&apos;s Event
                </h1>

               

                <div className="mt-6">
                    <h1 className="text-gray-300">Select registration type</h1>

                    <div className="mt-3 md:flex md:items-center md:-mx-2">
                        <button className={`flex justify-center w-full px-6 py-3 text-white ${fresh==true?"bg-yellow-500":""} rounded-lg md:w-auto md:mx-2 focus:outline-none border-yellow-500 `} onClick={()=>{
                            setFresh(!fresh)
                           }}>
                           <TbSchool className='text-white text-2xl' />

                            <span className="mx-2">
                                Fresher
                            </span>
                        </button>

                        <button className={`flex justify-center w-full px-6 py-3 mt-4 text-white border border-yellow-500 rounded-lg md:mt-0 md:w-auto md:mx-2   focus:outline-none  ${fresh==false?"bg-yellow-500":""}`} onClick={()=>{
                            setFresh(!fresh)
                            }}>
                            <TbSchoolOff className='text-white text-2xl' />

                            <span className="mx-2">
                                Senior
                            </span>
                        </button>
                    </div>
                </div>

                <form className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                    <div>
                        <label className="block mb-2 text-sm text-gray-200"> Name</label>
                        <input type="text" placeholder="John" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm text-gray-200">Registration Number</label>
                        <input type="text" placeholder="Snow" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm text-gray-200">Phone number</label>
                        <input type="text" placeholder="XXX-XX-XXXX-XXX" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm text-gray-200">Email address</label>
                        <input type="email" placeholder="johnsnow@example.com" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>


                  

                    <button
                        className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-yellow-600 rounded-lg hover:bg-yellow-800 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                        <span>Register Now </span>

                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd" />
                        </svg>
                      
                    </button>
                  
                </form>
                <p className="mt-4 text-gray-400">
                Join us for an unforgettable experience at the Fresher&apos;s event ! It&apos;s the perfect opportunity to kickstart your college journey with a bang. Register today to secure your spot and be part of an exciting event filled with fun, networking, and valuable insights. Don&apos;t miss out on this fantastic opportunity to connect with fellow freshmen and create lasting memories. Register now to embark on this epic adventure!
                </p>
            </div>
        </div>
    </div>
</section>
    </div>
  )
}

export default Register

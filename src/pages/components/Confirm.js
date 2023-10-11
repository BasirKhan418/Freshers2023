import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Confetti from "react-confetti";
import Script from 'next/script'
import { useRouter } from 'next/router'
const Confirm = () => {
  const router = useRouter();
  return (
    <>
    <div className="bg-gradient-to-r from-black to-gray-900 min-h-screen flex items-center justify-center w-full h-full">
     
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <div className="animate-tickScale inline-block bg-green-600 rounded-full">
    
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
        </div>
        
        <h1 className="text-4xl font-semibold text-gray-800 mb-4 font">Congratulations!</h1>
        <Confetti numberOfPieces={200} width={300} height={800} className='m-auto'/>
        <p className="text-lg text-gray-600 mb-4 font">You have successfully registered for the Freshers Party Event.</p>
        <p className="text-lg text-gray-600 mb-2 font">Your Food Coupon Code Is <span className='font-bold text-green-600'>{!router.query.cpn?"Pending":router.query.cpn}</span>.</p>
        {!router.query.cpn&&<p className="text-sm text-gray-600 mb-4 font">Your food coupon is pending at admin&apos;s side. Once your payment is verified it will be recieved through your email. </p>}
        {router.query.cpn&&<p className="text-sm text-gray-600 mb-4 font">Get your free meal after showing it on fresher&apos;s party event. <br/>Thank you for registration.</p>}
        <Link href="/" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full inline-block">Go Back to Home</Link>
    </div>
    </div>
    </>
  )
}

export default Confirm
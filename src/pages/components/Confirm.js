/* eslint-disable @next/next/no-sync-scripts */
import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Confetti from "react-confetti";
import Script from 'next/script'
const Confirm = () => {
  return (
    <div className="bg-gradient-to-r from-black to-gray-900 min-h-screen flex items-center justify-center">
      <style jsx global>
        {`
        @keyframes tickScale {
          0% {
              transform: scale(0);
          }
          80% {
              transform: scale(1.2);
          }
          100% {
              transform: scale(1);
          }
      }
        `}
      </style>
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <div className="animate-tickScale inline-block">
    
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
        </div>
        <Confetti numberOfPieces={200} width={1400} height={800} />
        <h1 className="text-4xl font-semibold text-gray-800 mb-4 font">Congratulations!</h1>
        <p className="text-lg text-gray-600 mb-8 font">You have successfully registered for the Freshers Party Event.</p>
        <Link href="/" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full inline-block">Go Back to Home</Link>
    </div>
    </div>
  )
}

export default Confirm

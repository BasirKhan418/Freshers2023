import React, { useEffect, useState } from 'react'
import Link from 'next/link'
const Navbar = () => {
    const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const navClass = scrolling ? 'bg-black' : '';
  return (
    <div className='Navbar'>
        <style jsx global>{`
       @import url('https://fonts.googleapis.com/css2?family=Gabarito&display=swap');
       .font{
        font-family: 'Gabarito', cursive;
       }
      `}</style>
      <header className={` flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full text-sm py-4 fixed top-0 bg-none lg:bg-none ${scrolling?"bg-gray-900 rounded-lg":""} `} id='sc'>
  <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
    <div className="flex items-center justify-between font">
      <Link className="inline-flex items-center gap-x-2 text-xl font-semibold text-white" href="/">
        आRAMBH
      </Link>
      <div className="sm:hidden bg-slate-500">
        <button type="button" className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium  text-white shadow-sm align-middle  focus:outline-none focus:ring-2 focus:ring-offset-2  transition-all text-sm  bg-slate-800 border-gray-700  dark:hover:text-white focus:ring-offset-gray-800" data-hs-collapse="#navbar-image-and-text-1" aria-controls="navbar-image-and-text-1" aria-label="Toggle navigation">
          <svg className="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
          <svg className="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </svg>
        </button>
      </div>
    </div>
    <div id="navbar-image-and-text-1" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
      <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
        <Link className=" text-blue-500 font" aria-current="page" href="/">Home</Link>
        <Link className=" text-white hover:text-gray-400 font" href="#about">About</Link>
        <Link className=" text-white hover:text-gray-400 font" href="#guest">Guests</Link>
        <Link className=" text-white hover:text-gray-400 font " href="#timeline">Timeline</Link>
        {/* <Link className=" text-white hover:text-gray-400 font" href="#co-ordinator">Co-ordinator</Link> */}
        <Link className=" text-white hover:text-gray-400 font" href="#co-ordinator">Faq</Link>
        <Link className=" text-white hover:text-gray-400 font" href="#contact">Contact Us</Link>
        <Link className='bg-yellow-600 text-white px-4 py-2 m-2 font hover:bg-gray-800 rounded-3xl border-2 border-yellow-800' href={"/Register"}>
       Register Now
      </Link>
      </div>
      
    </div>
  </nav>
</header>
    </div>
  )
}

export default Navbar

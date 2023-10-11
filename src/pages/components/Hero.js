import React from 'react'
import Timer from './Timer'
const Hero = () => {
  return (
    <div className='text-white '>
       
        <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Gabarito&display=swap');
       #intro {
        width: 100%;
        height:100vh;
        background: url("https://res.cloudinary.com/dawzncoau/image/upload/v1697017215/home_tijkvj.jpg") top center;
        background-size: cover;
        overflow: hidden;
        position: relative;
      }
      
      #intro:before {
        content: "";
        background: rgba(6, 12, 34, 0.8);
        position: absolute;
        bottom: 0;
        top: 0;
        left: 0;
        right: 0;
      }
      
      #intro .intro-container {
        position: absolute;
        bottom: 0;
        left: 0;
        top: 90px;
        right: 0;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        text-align: center;
        padding: 0 15px;
      }
      
      #intro h1 {
        color: #fff;
        font-family: 'Gabarito', cursive;
        font-size: 56px;
        font-weight: 600;
        text-transform: uppercase;
      }
      
      #intro h1 span {
       
        font-family: 'Gabarito', cursive;
      }
      
      #intro p {
        color: #ebebeb;
        font-weight: 700;
        font-size: 20px;
        font-family: 'Gabarito', cursive;
      }
      
      #intro .play-btn {
        width: 94px;
        height: 94px;
        background: radial-gradient(#f82249 50%, rgba(101, 111, 150, 0.15) 52%);
        border-radius: 50%;
        display: block;
        position: relative;
        overflow: hidden;
      }
      
      #intro .play-btn::after {
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        -webkit-transform: translateX(-40%) translateY(-50%);
        transform: translateX(-40%) translateY(-50%);
        width: 0;
        height: 0;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-left: 15px solid #fff;
        z-index: 100;
        transition: all 400ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
      }
      
      #intro .play-btn:before {
        content: '';
        position: absolute;
        width: 120px;
        height: 120px;
        -webkit-animation-delay: 0s;
        animation-delay: 0s;
        -webkit-animation: pulsate-btn 2s;
        animation: pulsate-btn 2s;
        -webkit-animation-direction: forwards;
        animation-direction: forwards;
        -webkit-animation-iteration-count: infinite;
        animation-iteration-count: infinite;
        -webkit-animation-timing-function: steps;
        animation-timing-function: steps;
        opacity: 1;
        border-radius: 50%;
        border: 2px solid rgba(163, 163, 163, 0.4);
        top: -15%;
        left: -15%;
        background: rgba(198, 16, 0, 0);
      }
      
      #intro .play-btn:hover::after {
        border-left: 15px solid #f82249;
        -webkit-transform: scale(20);
        transform: scale(20);
      }
      
      #intro .play-btn:hover::before {
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        -webkit-transform: translateX(-40%) translateY(-50%);
        transform: translateX(-40%) translateY(-50%);
        width: 0;
        height: 0;
        border: none;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-left: 15px solid #fff;
        z-index: 200;
        -webkit-animation: none;
        animation: none;
        border-radius: 0;
      }
      
      #intro .about-btn {
        font-family: "Raleway", sans-serif;
        font-weight: 500;
        font-size: 14px;
        letter-spacing: 1px;
        display: inline-block;
        padding: 12px 32px;
        border-radius: 50px;
        transition: 0.5s;
        line-height: 1;
        margin: 10px;
        color: #fff;
        -webkit-animation-delay: 0.8s;
        animation-delay: 0.8s;
        
      }
      
      #intro .about-btn:hover {
        
        color: #fff;
      }
      
      @-webkit-keyframes pulsate-btn {
        0% {
          -webkit-transform: scale(0.6, 0.6);
          transform: scale(0.6, 0.6);
          opacity: 1;
        }
      
        100% {
          -webkit-transform: scale(1, 1);
          transform: scale(1, 1);
          opacity: 0;
        }
      }
      
      @keyframes pulsate-btn {
        0% {
          -webkit-transform: scale(0.6, 0.6);
          transform: scale(0.6, 0.6);
          opacity: 1;
        }
      
        100% {
          -webkit-transform: scale(1, 1);
          transform: scale(1, 1);
          opacity: 0;
        }
      }
      @media (min-width: 767px) {
        #subscribe input {
          min-width: 400px;
        }
      }
      
      @media (min-width: 768px) {
        #contact .contact-address,
        #contact .contact-phone,
        #contact .contact-email {
          padding: 20px 0;
        }
      
        #contact .contact-phone {
          border-left: 1px solid #ddd;
          border-right: 1px solid #ddd;
        }
      }
      
      @media (min-width: 991px) {
        #schedule .sub-heading {
          width: 75%;
        }
      }
      
      @media (min-width: 1024px) {
        #intro {
          background-attachment: fixed;
        }
      
        #about {
          background-attachment: fixed;
        }
      
        #subscribe {
          background-attachment: fixed;
        }
      }
      
      @media (max-width: 1199px) {
        #header .container {
          max-width: 100%;
        }
      
        .nav-menu a {
          padding: 8px 4px;
        }
      }
      
      @media (max-width: 991px) {
        #header {
          background: rgba(6, 12, 34, 0.98);
          height: 70px;
          padding: 15px 0;
          transition: all 0.5s;
        }
      
        #nav-menu-container {
          display: none;
        }
      
        #mobile-nav-toggle {
          display: inline;
        }
      
        #intro .intro-container {
          top: 70px;
        }
      
        #intro h1 {
          font-size: 34px;
        }
      
        #intro p {
          font-size: 16px;
        }
      
        #schedule .nav-tabs a {
          padding: 8px 60px;
        }
      }
      
      @media (max-width: 768px) {
        .back-to-top {
          bottom: 15px;
        }
      
        #faq #faq-list a {
          font-size: 18px;
        }
      
        #faq #faq-list i {
          top: 13px;
        }
      }
      
      @media (max-width: 767px) {
        #schedule .nav-tabs a {
          padding: 8px 50px;
        }
      }
      
      @media (max-width: 574px) {
        #venue .venue-info h3 {
          font-size: 24px;
        }
      }
      
      @media (max-width: 480px) {
        #schedule .nav-tabs a {
          padding: 8px 30px;
        }
      }
      
      @media (max-width: 460px) {
        #subscribe button {
          margin-top: 10px;
        }
      }
     
      
      `}</style>
      <section id="intro" className='absolute'>
    <div className="intro-container wow fadeIn">
      <h1 className="mb-4 pb-0 herofont">Join Us For <span className='text-yellow-600'> आRAMBH</span> 2023</h1>
      <p className="mb-4 pb-0">13th October , 2023 , Near Gym Area At- 12.30 PM</p>
      {/* <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="venobox play-btn mb-4" data-vbtype="video"
        data-autoplay="true"></a> */}
        <Timer/>
      <a href="#about" className="about-btn scrollto border-2 border-yellow-600 hover:bg-yellow-500">About The Event</a>
    </div>
  </section>
    </div>
  )
}

export default Hero

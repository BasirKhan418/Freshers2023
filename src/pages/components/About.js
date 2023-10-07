import React from 'react';

const About = () => {
  return (
    <div>
      <style jsx global>
        {`
          #about {
            background: url("about.jpg");
            background-size: cover;
            overflow: hidden;
            position: relative;
            color: #fff;
            display: block;
          }
          #about:before {
            content: "";
            background: rgba(13, 20, 41, 0.6); /* Adjust opacity here */
            position: absolute;
            bottom: 0;
            top: 0;
            left: 0;
            right: 0;
          }
          h2, h3, p {
            color: #fff; /* Set text color to white */
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Add text shadow for better visibility */
          }

          /* You can adjust the text shadow properties as needed */

        `}
      </style>
      <main id='main'>
        <section id="about" className="text-white">
          <div className="container gap-4 text-white">
            <div className="row flex flex-row flex-wrap justify-center items-center gap-4">
              <div className="col-lg-6 w-96 p-2 m-2 mt-8">
                <h2 className='font text-4xl my-4 '>About The Event</h2>
                <p className='font'>Join us at the Freshers Party, an unforgettable evening of music, dance, and new friendships. Dress your best , capturing memories and celebrating the start of your college journey. Lets make this night one to remember! 🎉🕺👫📸 #FreshersParty #NewBeginnings</p>
              </div>
              <div className="col-lg-3 w-96 p-2 m-2 mt-8">
                <h3 className='font text-2xl my-2'>Where</h3>
                <p className='font'>At CUTM ,Near Gym Area</p>
              </div>
              <div className="col-lg-3 w-96 p-2 m-2 mt-8">
                <h3 className='font text-2xl my-2 '>When</h3>
                <p className='font'>Friday 13th October<br/>2023</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default About;

import { Link } from 'feather-icons-react/build/IconComponents'
import React from 'react'
const Schedule = () => {
  return (
    <div id='timeline'>
      <div className='bg-black font-bold flex justify-center flex-col items-center my-2'>
      <h1 className='font text-4xl text-white my-2'>
        Our Event Schedule
      </h1>
      <div className='h-1 w-44 bg-yellow-600 rounded-3xl my-2'></div>
    </div> 
<section>
    <div className="bg-black text-white py-2">
    <div className="container mx-auto flex flex-col items-start md:flex-row my-4 md:my-4">
      <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
        <p className="ml-2 text-yellow-300 uppercase tracking-loose font">आRAMBH 2023 Schedule</p>
        <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">Timeline For Fresher&apos;s Party</p>
        <p className="text-sm md:text-base text-gray-50 mb-4">
          Here&apos;s your guide to the fresher`s party process. Go through all the steps to know the exact process of the
          fresher&apos;s Party.
        </p>
        <a href={"/"}
        className="bg-transparent mr-auto hover:bg-yellow-300 text-yellow-300 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent">
        Explore Now</a>
      </div>
      <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
        <div className="container mx-auto w-full h-full">
          <div className="relative wrap overflow-hidden p-10 h-full">
            <div className="border-2-2 border-yellow-555 absolute h-full border"
              style={{right:" 50%",border: "2px solid #FFC100",borderRadius: "1%"}}></div>
            <div className="border-2-2 border-yellow-555 absolute h-full border"
               style={{right:" 50%",border: "2px solid #FFC100",borderRadius: "1%"}}></div>
            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="order-1 w-5/12 px-1 py-4 text-right">
                <p className="mb-3 text-base text-yellow-300">13TH OCTOBER 12:30 PM - 1:30 PM</p>
                <h4 className="mb-3 font-bold text-lg md:text-2xl">Food Distribution</h4>
                <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                Welcome and distribution of refreshments to attendees.
                </p>
              </div>
            </div>
            <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="order-1  w-5/12 px-1 py-4 text-left">
                <p className="mb-3 text-base text-yellow-300">1:30 PM - 1:55 PM</p>
                <h4 className="mb-3 font-bold text-lg md:text-2xl">Registration and Seating</h4>
                <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                Registration of participants and guests.Seating arrangement of attendees.
                </p>
              </div>
            </div>
            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="order-1 w-5/12 px-1 py-4 text-right">
                <p className="mb-3 text-base text-yellow-300"> 1:55 PM - 2:00 PM</p>
                <h4 className="mb-3 font-bold text-lg md:text-2xl">Opening Ceremony</h4>
                <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                Welcome address and brief introduction of the event.Traditional tilak application for all attendees.
                </p>
              </div>
            </div>

            <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12"></div>

              <div className="order-1  w-5/12 px-1 py-4">
                <p className="mb-3 text-base text-yellow-300">2:00 PM - 2:30 PM</p>
                <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left">Welcome Speeches</h4>
                <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                Vice Chancellor&apos;s Address, Director of CUTM&apos;s Address, Dean of School of Engineering and Technology&apos;s Address, Dean of Student Welfare&apos;s Address.

                </p>
              </div>
            </div>
            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="order-1 w-5/12 px-1 py-4 text-right">
                <p className="mb-3 text-base text-yellow-300">2:30 PM - 2:35 PM</p>
                <h4 className="mb-3 font-bold text-lg md:text-2xl">Odissi Dance</h4>
                <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                Odissi Dance Performance
                </p>
              </div>
            </div>
            <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12"></div>

              <div className="order-1  w-5/12 px-1 py-4">
                <p className="mb-3 text-base text-yellow-300">2:36 PM - 2:40 PM</p>
                <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left">Musical Performance (Song)</h4>
              </div>
            </div>
            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="order-1 w-5/12 px-1 py-4 text-right">
                <p className="mb-3 text-base text-yellow-300">2:41 PM - 2:48 PM</p>
                <h4 className="mb-3 font-bold text-lg md:text-2xl">Dance Performance (Group)</h4>
              </div>
            </div>
            <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12"></div>

              <div className="order-1  w-5/12 px-1 py-4">
                <p className="mb-3 text-base text-yellow-300">2:50 PM - 3:05 PM</p>
                <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left">Drama Presentation</h4>
              </div>
            </div>
            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="order-1 w-5/12 px-1 py-4 text-right">
                <p className="mb-3 text-base text-yellow-300">3:06 PM - 3:10 PM</p>
                <h4 className="mb-3 font-bold text-lg md:text-2xl">Trio Dance Performance</h4>
              </div>
            </div>
            <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12"></div>

              <div className="order-1  w-5/12 px-1 py-4">
                <p className="mb-3 text-base text-yellow-300">3:15 PM - 3:25 PM</p>
                <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left">Ramp Walk by Freshers</h4>
              </div>
            </div>
            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="order-1 w-5/12 px-1 py-4 text-right">
                <p className="mb-3 text-base text-yellow-300">3:26 PM - 3:30 PM</p>
                <h4 className="mb-3 font-bold text-lg md:text-2xl">Group Song Performance</h4>
              </div>
            </div>
            <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12"></div>

              <div className="order-1  w-5/12 px-1 py-4">
                <p className="mb-3 text-base text-yellow-300">3:31 PM - 3:40 PM</p>
                <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left">Group Dance Performance</h4>
              </div>
            </div>
            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="order-1 w-5/12 px-1 py-4 text-right">
                <p className="mb-3 text-base text-yellow-300">3:45 PM Onwards</p>
                <h4 className="mb-3 font-bold text-lg md:text-2xl">Games and Cultural Activities for Freshers</h4>
                <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                Various games and activities organized for the fresher students to participate in and enjoy.
                </p>
              </div>
            </div>
            <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12"></div>

              <div className="order-1  w-5/12 px-1 py-4">
                <p className="mb-3 text-base text-yellow-300">4:50 PM-4:55PM</p>
                <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left">Announcement of Miss and Mister Freshers</h4>
              </div>
            </div>
            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="order-1 w-5/12 px-1 py-16 text-right">
                <p className="mb-3 text-base text-yellow-300">4:55 PM - 5:30 PM</p>
                <h4 className="mb-3 font-bold text-lg md:text-2xl">Vote of Thanks</h4>
                <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                Thanking all attendees, participants, and organizers.
Closing remarks and best wishes for the academic year ahead.
                </p>
              </div>
            </div>
          </div>
          
          <img className="mx-auto -mt-36 md:-mt-36" src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png" />
        </div>
      </div>
    </div>
  </div>
  </section>
    </div>
  )
}

export default Schedule

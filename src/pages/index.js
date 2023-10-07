import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Guest from './components/Guest'
import Schedule from './components/Schedule'
const Index = () => {
  return (
    <div>
      <Hero/>
      <div className="">
<About/>
<Guest/>
<Schedule/>
      </div>
    </div>

  )
}

export default Index

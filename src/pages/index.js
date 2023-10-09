import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Guest from './components/Guest'
import Schedule from './components/Schedule'
import Cordinator from './components/Cordinators';
import Contact from './components/Contact';
import Faq from './components/Faq';
const Index = () => {
  return (
    <div>
      <Hero/>
      <div className="">
<About/>
<Guest/>
<Schedule/>
<Cordinator/>
<Faq/>
<Contact/>
      </div>
    </div>

  )
}

export default Index

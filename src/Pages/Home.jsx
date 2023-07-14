import React from 'react'
import Navbar from '../Components/NavBar'
import Video from '../Components/Video'
import AboutSection from '../Components/AboutSection'
import SkillSection from '../Components/SkillSection'
import Achievements from '../Components/Achievements'

function Home() {
  return (
    <div className='Home-container'>
        <Navbar />
        <Video />
        <AboutSection />
        <SkillSection />
        <Achievements />
    </div>
  )
}

export default Home
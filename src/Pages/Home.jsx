import React from 'react'
import Navbar from '../Components/NavBar'
import Video from '../Components/Video'
import AboutSection from '../Components/AboutSection'
import SkillSection from '../Components/SkillSection'
import Achievements from '../Components/Achievements'
import ResumeDownload from '../Components/ResumeDownload'
import ProjectSection from '../Components/ProjectSection'
import Footer from '../Components/Footer'

function Home() {
  return (
    <div className='Home-container'>
        <Navbar />
        <Video />
        <AboutSection />
        <SkillSection />
        <Achievements />
        <ProjectSection />
        <ResumeDownload />
        <Footer />
    </div>
  )
}

export default Home
import React from 'react'
import VideoBg from '../Images/background.mp4' ; 

function Video() {
  return (
    <div>
        <div className="overlay"></div>
        <video src={VideoBg} autoPlay loop  muted />
        <div className="content">
            <h1>I AM ADITYA BHATTACHARJEE</h1>
           
            
        </div>
        

    </div>
  )
}

export default Video
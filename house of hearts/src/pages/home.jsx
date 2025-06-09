import React, { use } from 'react'
import Navbar from '../components/navbar'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
import { useState } from 'react';
import CustomEase from 'gsap/CustomEase';
gsap.registerPlugin(ScrollTrigger);
const home = () => {

useGSAP(() => {
  gsap.timeline({
    scrollTrigger: {
      trigger: ".showcase",
      start: " 30% 50%",
      endTrigger: ".video-show",
      end: "top 0%",
      pin: ".showcase",
      
      scrub: 1,
      
      markers: true,
      
    }
  }).to(".showcase", {
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    scale: 6,
   
    borderRadius: "1px",

  });

});

 
  return (
    <div>
        <div className="homepage">
            <Navbar />
            <div className="home-text">
              <h3>GAME CHANGING</h3>
              <div className="center-txt">
           <h3 className='side-text'>EVENTS</h3>
           
            <video className='showcase' autoPlay loop muted src="https://cdn.pixabay.com/video/2024/11/27/243647_large.mp4"></video>
            
            <h3> AND</h3>

            </div>
           <h3 className='side-text'>EXPERIENCES</h3>

            </div>
           

        </div>
        <div className="video-show"></div>
        <div className="specialities">

        </div>
    </div>
  )
}

export default home
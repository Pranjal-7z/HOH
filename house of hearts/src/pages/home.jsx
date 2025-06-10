import React, { use } from "react";
import Navbar from "../components/navbar";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { useState } from "react";
import CustomEase from "gsap/CustomEase";
gsap.registerPlugin(ScrollTrigger);
const home = () => {
  const videoscrollref = useRef(null);
  useGSAP(()=>{
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".video-show",
        start: "0% 100%",
        end: "top 20%",
        scrub: 1,
        pin: ".showcase",
      },
    });
    tl.to(".navbar", {
      marginTop: "-1vh",
      duration: 0.3,
    })
    tl.to(".logo h3",{
      x: -200,
     
      duration: 0.3,
    })

    tl.to(".showcase", {
     scale: 6.5,
      
      
      borderRadius: "1px",
    })
  })
  const playVideo = () => {
     videoscrollref.current.scrollIntoView({ behavior: 'smooth' });
    const video= document.querySelector(".showcase video");
    if( video.muted) {
      video.muted= false;
    } else {
      video.muted = true;
    }
   
  }
  // useGSAP(() => {
  //   gsap
  //     .timeline({
  //       scrollTrigger: {
  //         trigger: ".video-show",
  //         start: " 30% 60%",
  //         end: "top 0%",
  //         pin: ".showcase",

  //         scrub: 1,

  //         markers: true,
  //       },
  //     })
  //     .to(".showcase", {
  //       left: "50%",
  //       top: "50%",
  //       transform: "translate(-50%, -50%)",
  //       scale: 6,

  //       borderRadius: "1px",
  //     });
  // });

  return (
    <div>
      <Navbar />
      <div className="homepage">
        <div className="home-text">
         
          <h3>GAME CHANGING</h3>
          <div className="center-txt">
            <h3 className="side-text">EVENTS</h3>

            <div className="showcase">
              <video onClick={playVideo} autoPlay muted loop src="https://video-previews.elements.envatousercontent.com/h264-video-previews/20f5c172-4098-40d8-b64b-f3d50421b9ae/25324751.mp4"></video></div>
            <h3> AND</h3>
          </div>
          <h3 className="side-text">EXPERIENCES</h3>
        </div>
      </div>
      <div ref={videoscrollref} className="video-show"></div>
      <div className="specialities"></div>
    </div>
  );
};

export default home;

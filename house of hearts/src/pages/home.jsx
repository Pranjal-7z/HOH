import React, { use } from "react";
import Navbar from "../components/navbar";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { useState } from "react";
import CustomEase from "gsap/CustomEase";
import Footer from "../components/footer";
gsap.registerPlugin(ScrollTrigger);
const home = () => {
  const videoscrollref = useRef(null);
  const videostopref = useRef(null);
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".video-show",
        start: "0% 100%",
        end: "top 20%",
        scrub: 1,
        pin: ".showcase",
      },
    });

    tl.to(
      ".navbar",
      {
        marginTop: "-1vh",
        duration: 0.3,
      },
      ["same"]
    );
    tl.to(
      ".logo h3",
      {
        x: -200,

        duration: 0.3,
      },
      ["same"]
    );

    tl.to(
      ".showcase",
      {
        scale: 6.5,

        borderRadius: "1px",
      },
      ["same"]
    );

    //dusri timeline

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".specialities",
        pin: true,

        start: "top 0%",
        end: "bottom 0%",
        scrub: 0.5,
      },
    });
    tl2.to(".word1", {
      "--after-width": "100%",
    });
    tl2.from(".img-div1", {
      width: "0vw",
    });
    tl2.to(".word2", {
      "--secondword": "100%",
    });
    tl2.to(".word3", {
      "--thirdword": "100%",
    });
    tl2.from(".img-div2", {
      width: "0vw",
    });
    tl2.to(".word4", {
      "--fourthword": "100%",
    });
    tl2.to(".word5", {
      "--fifthword": "100%",
    });
    tl2.from(".img-div3", {
      width: "0vw",
    });
    tl2.to(".word6", {
      "--sixthword": "100%",
    });

    //tisri timeline

    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".team",
        start: "70% 70%",
        endTrigger: ".cards-container",
        scrub: true,
        pin: true,
      },
    });

    tl3.to(".cards-container", {
      bottom: "140%",
    });

    //chauthi timeline

    const tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: ".events",
        start: "top 0%",
        end: "bottom 0%",
        pin: true,
        scrub: true,
      },
    });
    const windoe = window.innerWidth;
    const contwidth = document.querySelector(".horizontal-div").scrollWidth;
    tl4.to(".horizontal-div", {
      x: windoe - contwidth,
      delay: 0.5,
      duration: 2,
    });

    //pachvi timeline

    const tl5 = gsap.timeline({
      scrollTrigger: {
        trigger: ".sidelook",
        start: "top top",
        end: "top 0%",
        endTrigger: ".free",
       
        pin: true,
        scrub: true,
      },
    });

    //sahavi timeline
    const tl6 = gsap.timeline({
      scrollTrigger: {
        trigger: ".first-info",
        start: "top top",
        end: "bottom 60%",
        pin: true,
      },
    });

    const tl7 = gsap.timeline({
      scrollTrigger: {
        trigger: ".second-info",
        start: "top top",
        end: "bottom 60%",
        pin: true,
        scrub: true,
      },
    });

    const tl8 = gsap.timeline({
      scrollTrigger: {
        trigger: ".third-info",
        start: "top top",
        end: "bottom 80%",
        pin: true,
      },
    });
  });

  const playVideo = () => {
    videoscrollref.current.scrollIntoView({ behavior: "smooth" });
    const video = document.querySelector(".showcase video");
    if (video.muted) {
      video.muted = false;
    } else {
      video.muted = true;
    }
  };
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
    <>
    
    <div className="all">
      <Navbar />
      <div className="homepage">
        <div className="home-text">
          <h3>GAME CHANGING</h3>
          <div className="center-txt">
            <h3 className="side-text">EVENTS</h3>

            <div className="showcase">
              <video
                onClick={playVideo}
                autoPlay
                muted
                loop
                src="https://video-previews.elements.envatousercontent.com/h264-video-previews/20f5c172-4098-40d8-b64b-f3d50421b9ae/25324751.mp4"
              ></video>
            </div>
            <h3> AND</h3>
          </div>
          <h3 className="side-text">EXPERIENCES</h3>
        </div>
      </div>
      <div ref={videoscrollref} className="video-show"></div>
      <div ref={videostopref} className="specialities">
        <div className="specs-firstl">
          <div className="word1">EXPERIENCE</div>
          <div className="img-div1"></div>
          <div className="word2">ARCHITECTS</div>
        </div>
        <div className="specs-secondl">
          <div className="word3">TACTIAL</div> <div className="img-div2"></div>
          <div className="word4">STORYTELLERS</div>
        </div>
        <div className="specs-thirdl">
          <div className="word5">AND CHANGE</div>
          <div className="img-div3"></div>
          <div className="word6">MAKERS</div>
        </div>
      </div>
      <div className="team">
        <p>
          
          ALWAYS <br />
          THE TEAM
        </p>
        <div className="cards-container">
          <div className="card card1">
            <div className="card-name">
              <h6>VARUN</h6>
            </div>
            <div className="card-position"></div>
          </div>
          <div className="card card2">
            <div className="card-name">
              <h6>AJAY</h6>
            </div>
            <div className="card-position"></div>
          </div>
          <div className="card card3">
            <div className="card-name">
              <h6>CHETAN</h6>
            </div>
            <div className="card-position"></div>
          </div>
        </div>
      </div>
      <div className="events">
        <div className="horizontal-div">
          <div className="event-card">
            <video autoPlay
              loop
              muted
              src="videos\event1.mp4"
            ></video>
          </div>
          <div className="event-card">
            <video autoPlay
              loop
              muted
              src="videos\event2.mp4"
            ></video>
          </div>
          <div className="event-card">
            <video autoPlay
              loop
              muted
              src="videos\event3.mp4"
            ></video>
          </div>
          <div className="event-card">
            <video autoPlay
              loop
              muted
              src="videos\event4.mp4"
            ></video>
          </div>
          <div className="event-card">
            <video autoPlay loop muted src="videos/event5.mp4"
           ></video>
          </div>
        </div>
      </div>
      <div className="information">
        <div className="sidelook">
          <div className="releted-pic"><img src="images\hhh.jpg" alt="" /></div>
        </div>
        <div className="first-info info">
          <h3>Who We Are</h3>
          <p>
            Born in Nagpur. Built by creators. <br /> Driven to express freely.
          </p>
        </div>
        <div className="second-info info">
          <h3>Our Mission</h3>
          <p>
            We turn raw ideas into culture, stories,
            <br /> and shared experiences.
          </p>
        </div>
        <div className="third-info info">
          <h3>Core Values</h3>
          <p>
            Authenticity. Creativity. Collaboration. <br /> Expression matters
            more than perfection here.
          </p>
        </div>
        <div className="fourth-info info">
          <h3>Why It Matters</h3>
          <p>
            We’re building something real—where <br />
            every voice and vision counts.
          </p>
        </div>
      </div>
      <div className="free"></div>
      <div className="about">
        <div className="about-text">
         
         <div className="about-line1">United by <span className="span1">Creators </span></div> 
         <div className="about-line2">to shape <span className="span2">Culture</span>, community,</div>
          <div className="about-line3">and real <span className="span3"> expression</span></div> 
        </div>
        
        <button className="knowmore">know more <i class="ri-arrow-right-double-line"></i></button>
        <div className="journey">
          <div className="journey-cont">
          <span>500k+ <br />youth reached</span>
          <span>100+ <br />active members</span>
          <span>4+ <br />major events,</span>
          </div>
          </div>
      </div>
       <Footer/>
    </div>
   
    </>
  );
};

export default home;

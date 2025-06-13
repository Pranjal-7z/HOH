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
        markers: true,
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
        markers: true,
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
          <div className="word1">EXPERIENCE</div>{" "}
          <div className="img-div1"></div>{" "}
          <div className="word2">ARCHITECTS</div>
        </div>
        <div className="specs-secondl">
          <div className="word3">TACTIAL</div> <div className="img-div2"></div>{" "}
          <div className="word4">STORYTELLERS</div>
        </div>
        <div className="specs-thirdl">
          <div className="word5">AND CHANGE</div>
          <div className="img-div3"></div>
          <div className="word6">MAKERS</div>{" "}
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
              src="https://instagram.fphl1-1.fna.fbcdn.net/o1/v/t16/f2/m86/AQNCD0xHVriNC-S2bSMKb4_5C9iUpRc-sYTUlpwmyrguJmfcK8ejdG4bJhhnpyjQgvSN4OGkw0e-21zQWkvKaqqTCZxjhg4cvOcljxQ.mp4?stp=dst-mp4&efg=eyJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSIsInZlbmNvZGVfdGFnIjoidnRzX3ZvZF91cmxnZW4uY2xpcHMuYzIuMzYwLmJhc2VsaW5lIn0&_nc_cat=109&vs=1334497837922359_2291817168&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC9CODQzN0MyRjBDOTE1Rjc2NkVBMzdDMjExNTY0ODc4MV92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HTW1iOWh2U0x6ek9Oa3dEQU5RZDRMaUNndTk2YnFfRUFBQUYVAgLIARIAKAAYABsAFQAAJvS7xK%2Fl%2FJ1AFQIoAkMzLBdARcrhR64UexgSZGFzaF9iYXNlbGluZV8zX3YxEQB1%2Fgdl5p0BAA%3D%3D&_nc_rid=b1119af6f7&ccb=9-4&oh=00_AfO81hfopTA90yYI2FX2xzLp0IDLNx3QAfVHErZWRHTcxQ&oe=684C7787&_nc_sid=d885a2"
            ></video>
          </div>
          <div className="event-card">
            <video autoPlay
              loop
              muted
              src="https://scontent-syd2-1.cdninstagram.com/o1/v/t16/f2/m86/AQMCzVvmLm7bQxHoEBpt8F6HGSZdhE9dTnR5TJI46GAeivo6ziYBV_Qiu2InZgO0eBV7F9rmU1qxnqTFfcBLFQEbKCEL_KnZUrTPCnM.mp4?stp=dst-mp4&efg=eyJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSIsInZlbmNvZGVfdGFnIjoidnRzX3ZvZF91cmxnZW4uY2xpcHMuYzIuMzYwLmJhc2VsaW5lIn0&_nc_cat=103&vs=1720365862227620_3830521050&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC8yQzRDOTc3REJCRTUxMkEwRTk5NDg3NTJCQkFFNUZBNF92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HQk9KS0J3VGNQZl8zdzRDQUxwR2tLSC1tWHRrYnFfRUFBQUYVAgLIARIAKAAYABsAFQAAJvTF5quBjsM%2FFQIoAkMzLBdAQAAAAAAAABgSZGFzaF9iYXNlbGluZV8zX3YxEQB1%2Fgdl5p0BAA%3D%3D&ccb=9-4&oh=00_AfPlOlKz08wsfalbxG4FZLNfas_V4G6sccD5qjaTdHDIDA&oe=684C61F6&_nc_sid=10d13b"
            ></video>
          </div>
          <div className="event-card">
            <video autoPlay
              loop
              muted
              src="https://instagram.fphl1-1.fna.fbcdn.net/o1/v/t16/f2/m82/AQOUO0vMwYglzdu3_F3OU9yyNCR4uCW2KHtsrepSItGOUEgns9Pp-MX6kyhAvbTCZsyd4Gu7vgOCJu760mfJePtix41riy9ah4oFRnY.mp4?stp=dst-mp4&efg=eyJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSIsInZlbmNvZGVfdGFnIjoidnRzX3ZvZF91cmxnZW4uY2xpcHMuYzIuNzIwLmJhc2VsaW5lIn0&_nc_cat=111&vs=767851192208400_3616238475&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC9ENzQ1OTU0MDI1MUE5NDU3NDg3M0MzNTJBRTM3RjBBMV92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HSkpRbWhxU1NBVlc0OXdEQUNKSUJQZkozZ2N2YnFfRUFBQUYVAgLIARIAKAAYABsAFQAAJoDV9PHT9cFBFQIoAkMzLBdAN8QYk3S8ahgSZGFzaF9iYXNlbGluZV8xX3YxEQB1%2Fgdl5p0BAA%3D%3D&_nc_rid=31ea403801&ccb=9-4&oh=00_AfNdcsPuWkcSFi4hcuzp1DJibmzIJce1UUkh9oQA2Xo3hQ&oe=684C537E&_nc_sid=d885a2"
            ></video>
          </div>
          <div className="event-card">
            <video autoPlay
              loop
              muted
              src="https://instagram.fphl1-1.fna.fbcdn.net/o1/v/t16/f2/m86/AQNnZGAVUBlJEiY4yJxoWxpYCQCo-FXAD5KjcF1LQLEbMhxRoC4rUBFAPU9uw8oT5bUtvW_jog-upe1N6t6XOogZnc-UTIONI3_c0-g.mp4?stp=dst-mp4&efg=eyJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSIsInZlbmNvZGVfdGFnIjoidnRzX3ZvZF91cmxnZW4uY2xpcHMuYzIuNzIwLmJhc2VsaW5lIn0&_nc_cat=102&vs=1035989875249329_40713966&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC80RTQ5MzUwNENDNTFGRjgyOTRFNTE4REE3Q0UyRjY5Ml92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HRU9aRFIyTmp2NjJsV3dnQU82OUQ2X3RPN2tlYnFfRUFBQUYVAgLIARIAKAAYABsAFQAAJobDqOejt49AFQIoAkMzLBdAQu987ZFocxgSZGFzaF9iYXNlbGluZV8xX3YxEQB1%2Fgdl5p0BAA%3D%3D&_nc_rid=f811a96045&ccb=9-4&oh=00_AfPry4obhPu38CAmksERMGOm7WTvqgBkRCdEo_t2m0aA7A&oe=684C6771&_nc_sid=d885a2"
            ></video>
          </div>
          <div className="event-card">
            <video autoPlay loop muted src="https://scontent-arn2-1.cdninstagram.com/o1/v/t16/f2/m86/AQNoTOPy2ISmXalITza2anVbbRLCw587NxYo3bi1HEbbiFSJRPS99-aXWM-wxwKmJ9bJOL7dD-U-ztK5gC2uxAplwpADusTJNfcdaHU.mp4?stp=dst-mp4&efg=eyJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSIsInZlbmNvZGVfdGFnIjoidnRzX3ZvZF91cmxnZW4uY2xpcHMuYzIuMzYwLmJhc2VsaW5lIn0&_nc_cat=106&vs=1191221908804854_422529254&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC85OTQ1MkU0RTVENEMzN0EwMDZCMjc3ODA3RTRGNUY5QV92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HQU9EVmhzbnFtUkZwOTRGQUNLWS1qLThhVU43YnFfRUFBQUYVAgLIARIAKAAYABsAFQAAJszsyqmn9pJAFQIoAkMzLBdAOD0vGp%2B%2BdxgSZGFzaF9iYXNlbGluZV8zX3YxEQB1%2Fgdl5p0BAA%3D%3D&ccb=9-4&oh=00_AfNwOUVez3zvkjc_dkcfmmbXJbVtJdSQQsd6vqU-1vxxgg&oe=684C76B8&_nc_sid=10d13b"
           ></video>
          </div>
        </div>
      </div>
      <div className="information">
        <div className="sidelook">
          <div className="releted-pic"></div>
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

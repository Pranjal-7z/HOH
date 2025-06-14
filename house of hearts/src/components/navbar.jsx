import gsap from "gsap";
import React from "react";

const navbar = () => {
  var clicked = 0;
  const showMenu = () => {
    if (clicked % 2 == 0) {
      gsap.to(".menu-items", {
        top: "0%",

        duration: 0.6,
      });
      gsap.to(".nav-menu i", {
        rotate:"90deg",
        duration: 0.1,
      });
     
      clicked = 1;
     
    } else if (clicked % 2 == 1) {
      gsap.to(".menu-items", {
        top: "-110%",
        duration: 0.6,
      });
      gsap.to(".nav-menu i", {
        rotate:"45deg",
        duration: 0.1,
      });
      clicked = 0;
    }
  };
  return (
    <>
      <div className="menu-items">
        <h5>1. WHAT WE DO</h5>
        <h5>2. WHO WE ARE</h5>
        <h5>3. CONTACT</h5>
      </div>
      <div className="navbar">
        <div className="logo">
          <img src="images\logo-white.png" alt="" />
          <div className="tagline">
            <h3>
              Representing <br /> youth culture
            </h3>
          </div>
        </div>
        <div className="nav-space"></div>
        <div className="nav-menu">
          <h6 onClick={showMenu}>
            MENU <i className="ri-close-fill"></i>
          </h6>
        </div>
      </div>
    </>
  );
};

export default navbar;

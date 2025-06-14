import React from 'react'

const footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
          <div className="full-logo">
            <img src="images\hhh.jpg" alt="" />
            <h1>House Of Hearts</h1>
          </div>
          <div><span>connect with our socials</span></div>
           <div className="media"> 
                        <div className="social"><i class="ri-twitter-x-line"></i></div>
                        <div className="social"><i class="ri-instagram-line"></i></div>
                        <div className="social"><i class="ri-discord-fill"></i></div>
                        <div className="social"><i class="ri-linkedin-fill"></i></div>
                         <div className="social"><i class="ri-telegram-2-fill"></i></div>
                    </div>
          </div>
        <div className="footer-link">
          <h2>Quick links</h2>
          <ul>Who are we</ul>
          <ul>our work</ul>
          <ul>Contact us</ul>
        </div>
        <div className="footer-number">
          <h2>Contact us</h2>
          <ul>hoh.commune@gmail.com</ul>
          <ul>8080808080</ul>
          <ul>9084908490</ul>
        </div>
    </div>
  )
}

export default footer
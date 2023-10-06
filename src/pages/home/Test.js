import React from "react";
import "./Test.scss";
import video from "./video.mp4";

function Test() {
  return (
        <header>
    <div class = "test">
      <div class="heroSection">
          <video
            className="video"
            src={video}
            loop
            autoPlay
            muted
            // allowFullScreen
          > </video>

          <div class="container">
            <div class="logo">
              <a href="#">
                <img
                  src="https://www.mediafire.com/convkey/6e7d/scd887f4qxqsq4l6g.jpg"
                  alt="Logo"
                  />
              </a>
            </div>
            <nav>
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Services</a>
              <a href="#">Blog</a>
              <a href="#">Contact</a>
              <a href="#">FAQ</a>
            </nav>
          </div>
                 
          <div class="heroText">
            <h1>You can do it!</h1>
            <p>Push yourself, no one else is going to do it for you.</p>
            <button class="joinNow">Join now</button>
            <button>Know more</button>
          </div>
      </div>
   </div>
        </header>
  );
}

export default Test;

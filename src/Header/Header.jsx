import React from "react";
import "./Header.css";
import myVideo2 from "./../assests/sky.mp4";
import { useRef } from "react";
import { useEffect } from "react";

const Header = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current !== null) {
      videoRef.current.playbackRate = 1; // Set the playback rate to 0.5x
    }
  }, [videoRef]);
  return (
    <div className="header">
      <video className="headerVid" autoPlay muted loop ref={videoRef}>
        <source src={myVideo2} type="video/mp4" />
      </video>
      <div className="overlay">
        <div className="leftside">
          <span className="headerTitlesm">Love & Care</span>
          <p style={{color: '#ffffffbb'}}>with</p>
          <span className="headerTitlelg">Bangladesh</span>
        </div>

        <div className="rightside">
          <img
            className="img1"
            src="https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <img
            className="img2"
            src="https://images.pexels.com/photos/12511085/pexels-photo-12511085.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
          />
          <img
            className="img3"
            src="https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <img
            className="img4"
            src="https://images.pexels.com/photos/3329292/pexels-photo-3329292.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Header;

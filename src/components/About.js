import React from 'react';
import '../App.css'
import './About.css';
import './VideoSection.css';
import code from "./videos/code.mp4";
import ik from "./images/ik.jpg";

function AboutSection() {
  return (
    <>
        <div className='video-container'>
        <video src={code} autoPlay loop muted />
        </div>
        <div className='about-container'>
            <h1>Over mij</h1>
            <img src={ik} alt='ik' className='photo'/>
            <div className='text'>
                <p> &gt; Mijn naam is Ruben Smets;</p>
                <p> &gt; Ik ben 22 jaar oud en studeer AI & Robotics;</p>
            </div>
        </div>
    </>
  );
}

export default AboutSection;
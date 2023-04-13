import React from 'react';
import '../App.css'
import './About.css';
import './VideoSection.css';

function AboutSection() {
  return (
    <>
        <div className='video-container'>
        <video src='/videos/code.mp4' autoPlay loop muted />
        </div>
        <div className='about-container'>
            <h1>Over mij</h1>
            <img src='/images/ik.jpg' alt='ik' className='photo'/>
            <div className='text'>
                <p> &gt; Mijn naam is Ruben Smets;</p>
                <p> &gt; Ik ben 22 jaar oud en studeer AI & Robotics;</p>
            </div>
        </div>
    </>
  );
}

export default AboutSection;
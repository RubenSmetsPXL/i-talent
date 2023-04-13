import React from 'react';
import '../App.css'
import '../App.css';
import './VideoSection.css';
import helloworld from './videos/hello-world.mp4'

function VideoSection() {
  return (
    <div className='video-container'>
      <video src={helloworld} autoPlay loop muted />
    </div>
  );
}

export default VideoSection;
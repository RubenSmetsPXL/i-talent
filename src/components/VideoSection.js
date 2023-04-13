import React from 'react';
import '../App.css'
import '../App.css';
import './VideoSection.css';

function VideoSection() {
  return (
    <div className='video-container'>
      <video src='/videos/hello-world.mp4' autoPlay loop muted />
    </div>
  );
}

export default VideoSection;
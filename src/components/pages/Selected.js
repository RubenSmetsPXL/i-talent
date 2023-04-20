import '../../App.css';
import React from 'react';
import CardItem from '../CardItem';
import hackathon from '../images/hackathon.png'
import innovatieroute from '../images/innovatieroute.jpg'
import pxl from '../images/logo_pxl.png'
import code from "../videos/code.mp4";

function Selected() {

  return (
    <>
      <div className='video-container'>
        <video src={code} autoPlay loop muted />
      </div>
      <div className='cards'>
        <h1>Selectie</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src={hackathon}
                text='Hackathon fruit at work'
                path='/hackathon'
              />
              <CardItem
                src={innovatieroute}
                text='Innovatieroute Low Code'
                path='/innovatieroute'
              />
              <CardItem
                src={pxl}
                text='POP-sessie: Brein aan het werk! Niet storen!'
                path='/projectweek'
              />
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Selected;
import '../../App.css';
import React from 'react';
import { Link } from 'react-router-dom';
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
              <li className='cards__item'>
                <Link className='cards__item__link' to="/hackathon">
                  <figure className='cards__item__pic-wrap'>
                    <img className='cards__item__img' alt='activity' src={hackathon} />
                  </figure>
                  <div className='cards__item__info'>
                    <h5 className='cards__item__text'>Hackathon fruit at work</h5>
                  </div>
                </Link>
              </li>
              <li className='cards__item'>
                <Link className='cards__item__link' to="/innovatieroute">
                  <figure className='cards__item__pic-wrap'>
                    <img className='cards__item__img' alt='activity' src={innovatieroute} />
                  </figure>
                  <div className='cards__item__info'>
                    <h5 className='cards__item__text'>Innovatieroute Low Code</h5>
                  </div>
                </Link>
              </li>
              <li className='cards__item'>
                <Link className='cards__item__link' to='/brein-aan-het-werk'>
                  <figure className='cards__item__pic-wrap'>
                    <img className='cards__item__img' alt='activity' src={pxl} />
                  </figure>
                  <div className='cards__item__info'>
                    <h5 className='cards__item__text'>POP-sessie: Brein aan het werk! Niet storen!</h5>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Selected;
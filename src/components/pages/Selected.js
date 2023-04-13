import '../../App.css';
import React from 'react';
import '../Cards.css';
import CardItem from '../CardItem';
import hackathon from '../images/hackathon.png'
import ik from '../images/ik.jpg'

function Overview() {
  return (
    <div className='cards'>
      <h1>Selectie</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={hackathon}
              text='Hackathon fruit at work'
              path='/'
            />
            <CardItem
              src={ik}
              text='Innovatieroute lowcode'
              path='/'
            />
            <CardItem
              src={ik}
              text='Seminarie...'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Overview;
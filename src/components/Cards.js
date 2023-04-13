import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import hackathon from './images/hackathon.png'
import ik from './images/ik.jpg'

function Cards() {
  return (
    <div className='cards'>
      <h1>Innovatie</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={hackathon}
              text='Hackaton fruit at work'
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

      <h1>Seminaries</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={hackathon}
              text='Hackaton fruit at work'
              path='/'
            />
            <CardItem
              src={ik}
              text='Seminarie...'
              path='/'
            />
            <CardItem
              src={ik}
              text='Seminarie...'
              path='/'
            />
            <CardItem
              src={ik}
              text='Seminarie...'
              path='/'
            />
            <CardItem
              src={ik}
              text='Seminarie...'
              path='/'
            />
            <CardItem
              src={ik}
              text='Seminarie...'
              path='/'
            />
            <CardItem
              src={ik}
              text='Seminarie...'
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

      <h1>POP-sessies</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={hackathon}
              text='Hackaton fruit at work'
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
  );
}

export default Cards;
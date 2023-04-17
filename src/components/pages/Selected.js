import '../../App.css';
import React from 'react';
import '../Cards.css';
import CardItem from '../CardItem';
import hackathon from '../images/hackathon.png'
import innovatieroute from '../images/innovatieroute.jpg'
import ik from '../images/ik.jpg'
import code from "../videos/code.mp4";

function Overview() {
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
                details='qdsmfjqmkfjqdsklmfjmqdfkjmqsdjkf qdsmfjqmkfjqdsklmfjmqdfkjmqsdjkf qdsmfjqmkfjqdsklmfjmqdfkjmqsdjkf qdsmfjqmkfjqdsklmfjmqdfkjmqsdjkf qdsmfjqmkfjqdsklmfjmqdfkjmqsdjkf qdsmfjqmkfjqdsklmfjmqdfkjmqsdjkf qdsmfjqmkfjqdsklmfjmqdfkjmqsdjkf qdsmfjqmkfjqdsklmfjmqdfkjmqsdjkf qdsmfjqmkfjqdsklmfjmqdfkjmqsdjkf qdsmfjqmkfjqdsklmfjmqdfkjmqsdjkf qdsmfjqmkfjqdsklmfjmqdfkjmqsdjkf qdsmfjqmkfjqdsklmfjmqdfkjmqsdjkf qdsmfjqmkfjqdsklmfjmqdfkjmqsdjkf qdsmfjqmkfjqdsklmfjmqdfkjmqsdjkf qdsmfjqmkfjqdsklmfjmqdfkjmqsdjkf qdsmfjqmkfjqdsklmfjmqdfkjmqsdjkf qdsmfjqmkfjqdsklmfjmqdfkjmqsdjkf qdsmfjqmkfjqdsklmfjmqdfkjmqsdjkf qdsmfjqmkfjqdsklmfjmqdfkjmqsdjkf qdsmfjqmkfjqdsklmfjmqdfkjmqsdjkf qdsmfjqmkfjqdsklmfjmqdfkjmqsdjkf qdsmfjqmkfjqdsklmfjmqdfkjmqsdjkf qdsmfjqmkfjqdsklmfjmqdfkjmqsdjkf qdsmfjqmkfjqdsklmfjmqdfkjmqsdjkf qdsmfjqmkfjqdsklmfjmqdfkjmqsdjkf qdsmfjqmkfjqdsklmfjmqdfkjmqsdjkf qdsmfjqmkfjqdsklmfjmqdfkjmqsdjkf qdsmfjqmkfjqdsklmfjmqdfkjmqsdjkf qdsmfjqmkfjqdsklmfjmqdfkjmqsdjkf qdsmfjqmkfjqdsklmfjmqdfkjmqsdjkf qdsmfjqmkfjqdsklmfjmqdfkjmqsdjkf qdsmfjqmkfjqdsklmfjmqdfkjmqsdjkf qdsmfjqmkfjqdsklmfjmqdfkjmqsdjkf qdsmfjqmkfjqdsklmfjmqdfkjmqsdjkf qdsmfjqmkfjqdsklmfjmqdfkjmqsdjkf qdsmfjqmkfjqdsklmfjmqdfkjmqsdjkf qdsmfjqmkfjqdsklmfjmqdfkjmqsdjkf qdsmfjqmkfjqdsklmfjmqdfkjmqsdjkf qdsmfjqmkfjqdsklmfjmqdfkjmqsdjkf qdsmfjqmkfjqdsklmfjmqdfkjmqsdjkf qdsmfjqmkfjqdsklmfjmqdfkjmqsdjkf qdsmfjqmkfjqdsklmfjmqdfkjmqsdjkf qdsmfjqmkfjqdsklmfjmqdfkjmqsdjkf qdsmfjqmkfjqdsklmfjmqdfkjmqsdjkf qdsmfjqmkfjqdsklmfjmqdfkjmqsdjkf qdsmfjqmkfjqdsklmfjmqdfkjmqsdjkf qdsmfjqmkfjqdsklmfjmqdfkjmqsdjkf qdsmfjqmkfjqdsklmfjmqdfkjmqsdjkf qdsmfjqmkfjqdsklmfjmqdfkjmqsdjkf qdsmfjqmkfjqdsklmfjmqdfkjmqsdjkf qdsmfjqmkfjqdsklmfjmqdfkjmqsdjkf qdsmfjqmkfjqdsklmfjmqdfkjmqsdjkf qdsmfjqmkfjqdsklmfjmqdfkjmqsdjkf qdsmfjqmkfjqdsklmfjmqdfkjmqsdjkf qdsmfjqmkfjqdsklmfjmqdfkjmqsdjkf '
              />
              <CardItem
                src={innovatieroute}
                text='Innovatieroute Low Code'
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
    </>
  )
}

export default Overview;
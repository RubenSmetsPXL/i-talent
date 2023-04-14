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
              details='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A condimentum vitae sapien pellentesque habitant morbi tristique. Sed vulputate mi sit amet mauris. Scelerisque fermentum dui faucibus in ornare. Volutpat sed cras ornare arcu dui. Auctor augue mauris augue neque gravida in fermentum et. Id consectetur purus ut faucibus pulvinar elementum integer enim neque. Aliquet lectus proin nibh nisl. Sit amet purus gravida quis blandit turpis. Massa eget egestas purus viverra accumsan. Lacinia at quis risus sed vulputate odio. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec.

              Tincidunt vitae semper quis lectus nulla at volutpat. Accumsan sit amet nulla facilisi morbi tempus iaculis. Turpis egestas sed tempus urna et pharetra pharetra massa massa. Ullamcorper malesuada proin libero nunc consequat. Consequat interdum varius sit amet mattis vulputate enim. Ut placerat orci nulla pellentesque dignissim enim sit amet venenatis. Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Amet nulla facilisi morbi tempus iaculis urna id. Ultricies tristique nulla aliquet enim tortor at. Tortor aliquam nulla facilisi cras fermentum odio eu. Purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Vitae auctor eu augue ut lectus arcu bibendum. Nam libero justo laoreet sit. Dignissim enim sit amet venenatis urna cursus. Sed id semper risus in hendrerit gravida rutrum. Curabitur vitae nunc sed velit.
              
              Vel orci porta non pulvinar neque laoreet. Magna fermentum iaculis eu non diam phasellus. Amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus et. Ut eu sem integer vitae justo eget magna fermentum. Nibh praesent tristique magna sit amet purus gravida quis. Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Scelerisque eu ultrices vitae auctor eu. Amet venenatis urna cursus eget nunc scelerisque viverra mauris. Quam viverra orci sagittis eu volutpat. Cursus sit amet dictum sit amet.
              
              Adipiscing tristique risus nec feugiat in fermentum posuere urna. Orci porta non pulvinar neque laoreet. Accumsan sit amet nulla facilisi morbi tempus iaculis urna. Tincidunt ornare massa eget egestas purus. Dolor sed viverra ipsum nunc aliquet bibendum enim. In mollis nunc sed id semper risus in hendrerit gravida. Sodales neque sodales ut etiam sit amet nisl. Pellentesque habitant morbi tristique senectus et netus et. Orci sagittis eu volutpat odio facilisis mauris sit. Ullamcorper sit amet risus nullam. Egestas erat imperdiet sed euismod.
              
              Orci sagittis eu volutpat odio facilisis mauris. Id eu nisl nunc mi ipsum faucibus. Vivamus arcu felis bibendum ut tristique et egestas quis ipsum. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Non enim praesent elementum facilisis leo vel fringilla est ullamcorper. Sed id semper risus in hendrerit gravida rutrum quisque non. Vitae congue eu consequat ac felis donec. Iaculis at erat pellentesque adipiscing. Semper eget duis at tellus at. Facilisis mauris sit amet massa vitae. Molestie at elementum eu facilisis sed odio morbi quis commodo. Ac placerat vestibulum lectus mauris. Interdum varius sit amet mattis vulputate enim. Sodales neque sodales ut etiam sit amet nisl purus. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius. Neque ornare aenean euismod elementum nisi. Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Ullamcorper velit sed ullamcorper morbi tincidunt. Ullamcorper velit sed ullamcorper morbi.'
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
              path='/Innovatie'
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
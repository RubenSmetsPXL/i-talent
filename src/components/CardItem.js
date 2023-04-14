import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {

  const [expanded, setExpanded] = useState(false);
  const [showDetails, setShowDetails] = useState(false);


  const handleExpandClick = () => {
    setShowDetails(!showDetails);
    setExpanded(!expanded);

  };

  return (
    <>
      <li className={`cards__item ${expanded ? 'expanded' : ''}`}>
        {showDetails ?
          <Link className='cards__item__link' to={props.path} onClick={handleExpandClick}>
            <figure className='cards__item__pic-wrap'>
              <img
                className='cards__item__img'
                alt='activity'
                src={props.src}
              />
            </figure>
            <div className='cards__item__info'>
              <h5 className='cards__item__text'>{props.text}</h5>
              <h5 className='cards__item__details'>{props.details}</h5>
            </div>
          </Link> :
          <Link className='cards__item__link' to={props.path} onClick={handleExpandClick}>
            <figure className='cards__item__pic-wrap'>
              <img
                className='cards__item__img'
                alt='activity'
                src={props.src}
              />
            </figure>
            <div className='cards__item__info'>
              <h5 className='cards__item__text'>{props.text}</h5>
            </div>
          </Link>
        }

      </li>
    </>
  );
}

export default CardItem;
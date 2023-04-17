import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  const { index, path, src, text, details, onCardItemClick } = props;
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    if (expanded) {
      setExpanded(false);
      props.onCardItemClick(null);
    } else {
      onCardItemClick(index);
      setExpanded(true);
    }
  };

  return (
    <li className={`cards__item ${props.expanded ? 'expanded' : ''}`}>
      <Link className='cards__item__link' to={path} onClick={handleExpandClick}>
        <figure className='cards__item__pic-wrap'>
          <img className='cards__item__img' alt='activity' src={src} />
        </figure>
        <div className='cards__item__info'>
          <h5 className='cards__item__text'>{text}</h5>
        </div>
        {props.expanded && (
          <div className='cards__item__details'>
            <h5 className='cards__item__details'>{details.split('\n').map((item, key) => {
              return <React.Fragment key={key}>{item}<br /></React.Fragment>
            })}</h5>
          </div>
        )}
      </Link>
    </li>
  );
}

export default CardItem;
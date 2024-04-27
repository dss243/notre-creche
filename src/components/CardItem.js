import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
            <p className='cards__item__date'>{props.date}</p>
            <p className='cards__item__start-time'>{props.startTime}</p>
            <p className='cards__item__end-time'>{props.endTime}</p>
          </div>
        </Link>
        <Link to={props.buttonPath} className='cards__item__button'>
          {props.buttonText}
        </Link>
      </li>
    </>
  );
}

export default CardItem;
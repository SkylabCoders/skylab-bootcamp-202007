import React from 'react';
import { Link } from 'react-router-dom';

import ThumbUpIcon from '@material-ui/icons/ThumbUp';

import './following.scss';

const Following = ({ following }) => {
  const result = following?.map((element, i) => {
    return (
      <div className='main__item' key={i}>
        <Link to={`/band/${element._id}`}>
          <img src={element.logo} alt='Band logo' className='item__logo' />
        </Link>
        <div className='item__text'>
          <p className='text__name'>{element.name}</p>
          <p className='text__locality'>
            <span>{element.city}</span>
            {' | '}
            <span>{element.country}</span>
          </p>
        </div>
      </div>
    );
  });

  return (
    <section className='follow'>
      <div className='follow__title'>
        <ThumbUpIcon className='title__icon' />
        <p className='title__text'>Following</p>
      </div>
      <div className='follow__main'>{result}</div>
    </section>
  );
};

export default Following;
export { Following };

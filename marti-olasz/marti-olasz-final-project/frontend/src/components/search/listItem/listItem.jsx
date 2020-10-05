import React from 'react';
import { Link } from 'react-router-dom';

import './listItem.scss';

import AddCircleIcon from '@material-ui/icons/AddCircle';

function ListItem({ data }) {
  return (
    <section className='item-list'>
      <img src={data.logo} alt='logo' className='item-list__logo' />
      <div className='item-list__info'>
        <div className='info__top'>
          <p className='top__name'>{data.name}</p> |
          <p className='top__city'>{data.city}</p>
          <p className='top__country'>{data.country}</p>
        </div>
        <div className='info__middle'>
          {data.tags.map((element, i) => (
            <p className='middle__item' key={i}>
              {element}
            </p>
          ))}
        </div>
        <p className='info__bio'>{data.bio}</p>

        <Link to={`/band/${data._id}`}>
          <AddCircleIcon className='bottom__icon' />
        </Link>
      </div>
    </section>
  );
}

export default ListItem;

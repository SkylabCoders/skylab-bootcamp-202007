import React from 'react';
import './notifier.sass';
import { Link } from 'react-router-dom';

function UpdatesListItem({ item }) {

  return (
    <div className='notifier__updatesListItem'>
      <Link to={`${item.root}${item.slug}`}>{item.title}</Link>
    </div>
  );
}

export default UpdatesListItem;
import React from 'react';
import './disc.scss';
import { connect } from 'react-redux';

import { showDisc } from '../../../../../redux/actions/bandActions';

import AddCircleIcon from '@material-ui/icons/AddCircle';

function Disc({ data, index, editInfo, dispatch }) {
  return (
    <div className='item'>
      {index === -1 ? (
        <div className='main__edit'>
          <AddCircleIcon
            className='edit__icon'
            onClick={(event) => dispatch(showDisc(index))}
          />
        </div>
      ) : (
        <>
          <img
            src={data.img}
            alt='Cover'
            className='item__img'
            onClick={(event) => dispatch(showDisc(index))}
          />
          <p className='item__title'>{data.title}</p>
        </>
      )}
    </div>
  );
}

export default connect()(Disc);
export { Disc };

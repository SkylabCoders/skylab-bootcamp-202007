import React, { useState } from 'react';
import { connect } from 'react-redux';
import './concerts.scss';

import {
  createConcert,
  deleteConcert
} from '../../../../redux/actions/bandActions';

import isAnEmptyObject from '../../../../isAnEmptyObject';

import MusicIcon from '@material-ui/icons/MusicNote';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

function Concerts({ data, editInfo, bandId, dispatch }) {
  const [newConcert, setNewConcert] = useState({ date: '', city: '' });

  return (
    <section className='concerts'>
      <div className='concerts__title'>
        <MusicIcon className='title__icon' />
        <h1 className='title__text'>Concerts</h1>
      </div>
      <div className='concerts__main'>
        {data?.map((element, i) => {
          return (
            <div className='main__item' key={i}>
              <p className='item__date'>{element.date?.slice(0, 10)}</p>
              <div className='item__container'>
                <p className='container__city'>{element.city}</p>
                {!isAnEmptyObject(editInfo) && (
                  <HighlightOffIcon
                    className='container__icon'
                    onClick={() => dispatch(deleteConcert(bandId, element._id))}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
      {!isAnEmptyObject(editInfo) && (
        <div className='concerts__new-concert'>
          <div className='new-concert__input'>
            <input
              className='input__date'
              placeholder='Date'
              type='date'
              value={newConcert.date}
              onChange={(event) =>
                setNewConcert({ ...newConcert, date: event.target.value })
              }
            />

            <input
              className='input__city'
              placeholder='City'
              type='text'
              value={newConcert.city}
              onChange={(event) =>
                setNewConcert({ ...newConcert, city: event.target.value })
              }
            />
          </div>
          <div className='new-concert__create'>
            <AddCircleOutlineIcon
              className='create__icon'
              onClick={() => {
                if (newConcert.date && newConcert.city) {
                  dispatch(createConcert(bandId, newConcert));
                  setNewConcert({ date: '', city: '' });
                }
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
}

function mapStateToProps(state) {
  return {
    editInfo: state.bandReducer.editInfo,
    bandId: state.bandReducer.band._id
  };
}

export default connect(mapStateToProps)(Concerts);
export { Concerts };

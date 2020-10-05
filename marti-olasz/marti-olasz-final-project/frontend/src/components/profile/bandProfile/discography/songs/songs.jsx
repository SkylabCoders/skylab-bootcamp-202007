import React from 'react';
import { connect } from 'react-redux';

import './songs.scss';

import Disc from '../disc/disc';

import isAnEmptyObject from '../../../../../isAnEmptyObject';

import BackIcon from '@material-ui/icons/KeyboardBackspace';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import { showDisc, deleteDisc } from '../../../../../redux/actions/bandActions';

function Songs({ info, index, editInfo, bandId, dispatch }) {
  return (
    <section className='songs'>
      <div className='songs__top'>
        <img src={info[index].img} alt='Album cover' className='top__img' />
        <div className='top__content'>
          <div className='content__icon'>
            <BackIcon
              className='icon__back'
              onClick={(event) => dispatch(showDisc(undefined))}
            />

            {!isAnEmptyObject(editInfo) && (
              <HighlightOffIcon
                className='icon__delete'
                onClick={(event) => {
                  dispatch(deleteDisc(bandId, info[index]._id));
                  dispatch(showDisc(undefined));
                }}
              />
            )}
          </div>
          <div className='content__text'>
            <h3 className='text__title'>{info[index].title}</h3>
            <p className='text__info'>
              {info[index].date.slice(0, 10)} | {info[index].songs.length} songs
            </p>
          </div>
        </div>
      </div>
      <div className='songs__middle'>
        {info[index].songs.map((element, i) => {
          return (
            <p className='middle__item' key={i}>
              <span className='item__number'>{i + 1}.</span>
              {element.title} | {element.time}
            </p>
          );
        })}
      </div>
      <div className='songs__bottom'>
        {info.map((element, i) => {
          if (i !== index) return <Disc data={element} index={i} key={i} />;
          else return '';
        })}
      </div>
    </section>
  );
}

function mapStateToProps(state) {
  return {
    editInfo: state.bandReducer.editInfo,
    bandId: state.bandReducer.band._id
  };
}

export default connect(mapStateToProps, null)(Songs);
export { Songs };

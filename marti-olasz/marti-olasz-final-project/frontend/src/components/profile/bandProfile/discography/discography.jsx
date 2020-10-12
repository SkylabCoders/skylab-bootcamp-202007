import React from 'react';
import { connect } from 'react-redux';

import './discography.scss';

import Disc from './disc/disc';
import Songs from './songs/songs';
import AddDisc from './addDisc/addDisc';

import isAnEmptyObject from '../../../../isAnEmptyObject';

import DiscIcon from '@material-ui/icons/Album';

function Discography({ data, disc, editInfo }) {
  return (
    <section className='discography'>
      <div className='discography__title'>
        <DiscIcon className='title__icon' />
        <h1>Discography</h1>
      </div>
      {disc !== undefined ? (
        disc === -1 ? (
          <AddDisc />
        ) : (
          <Songs info={data} index={disc} />
        )
      ) : (
        <div className='discography__main'>
          {data.map((element, i) => {
            return <Disc data={element} index={i} key={i} />;
          })}

          {!isAnEmptyObject(editInfo) && <Disc index={-1} />}
        </div>
      )}
    </section>
  );
}

function mapStateToProps(state) {
  return {
    disc: state.bandReducer.disc,
    editInfo: state.bandReducer.editInfo,
    data: state.bandReducer.band.discography
  };
}

export default connect(mapStateToProps)(Discography);
export { Discography };

import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import './bandProfile.scss';

import PuffLoader from 'react-spinners/PuffLoader';

import {
  getBand,
  follow,
  showDisc,
  bandEdit,
  showPhoto
} from '../../../redux/actions/bandActions';

import ProfileHeader from './bandHeader/bandHeader';
import Photos from './photos/photos';
import Discography from './discography/discography';
import Concerts from './concerts/concerts';
import BandBio from './bandBio/bandBio';

function BandProfile({ match, band, followers, user, dispatch }) {
  const [calls, setCalls] = useState(false);
  useEffect(() => {
    if (!calls) {
      dispatch(bandEdit({}));
      dispatch(showDisc());
      dispatch(showPhoto());
      dispatch(getBand(match.params.bandId));
      dispatch(follow(match.params.bandId));
      setCalls(true);
    }
  }, [band, calls, dispatch, match.params.bandId, user]);

  const result = !(
    Object.keys(band).length === 0 && band.constructor === Object
  ) ? (
    <article className='band-profile'>
      <ProfileHeader />
      <div className='band-profile__middle'>
        <BandBio />

        <Discography />
      </div>
      <div className='band-profile__bottom'>
        <Concerts data={band.concerts} />
        <Photos photos={band.photos} />
      </div>
    </article>
  ) : (
    <PuffLoader color='#f55110' />
  );

  return result;
}

function mapStateToProps(state) {
  return {
    band: state.bandReducer.band,
    user: state.authReducer.user
  };
}

export default connect(mapStateToProps, null)(BandProfile);
export { BandProfile };

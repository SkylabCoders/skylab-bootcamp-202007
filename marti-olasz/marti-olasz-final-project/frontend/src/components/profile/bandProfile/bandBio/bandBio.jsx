import React from 'react';
import { connect } from 'react-redux';

import { bandEdit } from '../../../../redux/actions/bandActions';

import isAnEmptyObject from '../../../../isAnEmptyObject';

import './bandBio.scss';

import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

function BandBio({ band, editInfo, dispatch }) {
  return (
    <section className='bio'>
      <div className='bio__top'>
        {!isAnEmptyObject(editInfo) ? (
          <input
            placeholder='Band name'
            type='text'
            maxLength='50'
            value={editInfo.name}
            onChange={(event) =>
              dispatch(bandEdit({ ...editInfo, name: event.target.value }))
            }
            className='top__name input'
          />
        ) : (
          <strong className='top__name'>{band.name}</strong>
        )}
        <div className='top__region'>
          {!isAnEmptyObject(editInfo) ? (
            <>
              <input
                placeholder='City'
                type='text'
                maxLength='20'
                value={editInfo.city}
                onChange={(event) =>
                  dispatch(bandEdit({ ...editInfo, city: event.target.value }))
                }
                className='region__city input'
              />

              <input
                placeholder='Country'
                type='text'
                maxLength='20'
                value={editInfo.country}
                onChange={(event) =>
                  dispatch(
                    bandEdit({ ...editInfo, country: event.target.value })
                  )
                }
                className='region__country input'
              />
            </>
          ) : (
            <>
              <p className='region__city'>{band.city}</p> |
              <p className='region__country'>{band.country}</p>
            </>
          )}
        </div>
      </div>
      <div className='bio__middle'>
        {!isAnEmptyObject(editInfo) ? (
          <textarea
            placeholder='Bio'
            type='text'
            value={editInfo.bio}
            onChange={(event) =>
              dispatch(bandEdit({ ...editInfo, bio: event.target.value }))
            }
            className='middle__bio text-area'
          />
        ) : (
          <p className='middle__bio'>{band.bio}</p>
        )}
      </div>
      <div className={`bio__bottom ${editInfo.socialNetwork && 'edit'}`}>
        <div className='bottom__container'>
          <a
            href={`http://${
              editInfo.socialNetwork?.twitter || band.socialNetwork.twitter
            }`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <TwitterIcon className='container__icon' />
          </a>
          {!isAnEmptyObject(editInfo) && (
            <input
              placeholder='twitter.com'
              type='text'
              value={editInfo.socialNetwork.twitter}
              onChange={(event) =>
                dispatch(
                  bandEdit({
                    ...editInfo,
                    socialNetwork: {
                      ...editInfo.socialNetwork,
                      twitter: event.target.value
                    }
                  })
                )
              }
              className='container__input input'
              id='twitter'
            />
          )}
        </div>
        <div className='bottom__container'>
          <a
            href={`http://${
              editInfo.socialNetwork?.facebook || band.socialNetwork.facebook
            }`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FacebookIcon className='container__icon' />
          </a>
          {!isAnEmptyObject(editInfo) && (
            <input
              placeholder='facebook.com'
              type='text'
              value={editInfo.socialNetwork.facebook}
              onChange={(event) =>
                dispatch(
                  bandEdit({
                    ...editInfo,
                    socialNetwork: {
                      ...editInfo.socialNetwork,
                      facebook: event.target.value
                    }
                  })
                )
              }
              className='container__input input'
              id='facebook'
            />
          )}
        </div>
        <div className='bottom__container'>
          <a
            href={`http://${
              editInfo.socialNetwork?.instagram || band.socialNetwork.twitter
            }`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <InstagramIcon className='container__icon' />
          </a>

          {!isAnEmptyObject(editInfo) && (
            <input
              placeholder='instagram.com'
              type='text'
              value={editInfo.socialNetwork.instagram}
              onChange={(event) =>
                dispatch(
                  bandEdit({
                    ...editInfo,
                    socialNetwork: {
                      ...editInfo.socialNetwork,
                      instagram: event.target.value
                    }
                  })
                )
              }
              className='container__input input'
              id='instagram'
            />
          )}
        </div>
      </div>
    </section>
  );
}

function mapStateToProps(state) {
  return {
    editInfo: state.bandReducer.editInfo,
    band: state.bandReducer.band
  };
}

export default connect(mapStateToProps)(BandBio);
export { BandBio };

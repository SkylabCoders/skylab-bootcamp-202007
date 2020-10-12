import React from 'react';
import { Redirect } from 'react-router-dom';

import { searchBand } from '../../redux/actions/bandActions';

function onSearch(event, dispatch, setRedirect) {
  if (event.keyCode === 13) {
    dispatch(searchBand(event.target.value.toLowerCase()));
    event.target.value = '';
    setRedirect(<Redirect to='/search' />);
  }
}

export default onSearch;

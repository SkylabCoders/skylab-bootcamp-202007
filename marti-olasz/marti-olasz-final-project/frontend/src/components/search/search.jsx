import React from 'react';
import { connect } from 'react-redux';

import './search.scss';

import PuffLoader from 'react-spinners/PuffLoader';

import ListItem from './listItem/listItem';

function Search({ band }) {
  const list = band ? (
    band.map((element, i) => <ListItem data={element} key={i} />)
  ) : (
    <PuffLoader color='#f55110' />
  );

  return <section className='list'>{list}</section>;
}

function mapStateToProps(state) {
  return { band: state.bandReducer.search };
}

export default connect(mapStateToProps, null)(Search);
export { Search };

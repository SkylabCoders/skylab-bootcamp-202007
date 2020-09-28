import React, { useState } from 'react';
import { connect } from 'react-redux';
import TuneIcon from '@material-ui/icons/Tune';
import SortByAlphaIcon from '@material-ui/icons/SortByAlpha';
import './portfolioInfo.sass';
import Dropdown from './../common/Dropdown';

function PortfolioInfo({ projects }) {
  const [ dropdownStatus, setDropdownStatus ] = useState(false);
  const [ appliedFilter, setAppliedFilter ] = useState(false);
  const MOCK_FILTER = ['ongoing', 'planned', 'closed'];

  function displayInfo(){
  return ( Object.keys(projects).length !== 0 && projects.constructor === Object ) ? 
    (
      <p>
        <span>You have {projects.length} projects in your portfolio:</span>
        <span> {projects.filter(project => project.status === 'ongoing').length} ongoing,</span>
        <span> {projects.filter(project => project.status === 'planned').length} planned,</span>
        <span> {projects.filter(project => project.status === 'closed').length} closed.</span>
      </p>
    ) : '';
  }

  return (
    <div>
      <div className="portfolioInfo__container">
        <div className='info__main'>
          <h2>YOUR PROJECTS</h2>
          {displayInfo()}
        </div>
        <div className='info__icons'>
          <div className='icon'>
            <TuneIcon htmlColor='#ffffff' onClick={(event)=>{event.preventDefault(); setDropdownStatus(!dropdownStatus)}}/>
          </div>
          <div className='icon'>
            <SortByAlphaIcon htmlColor='#ffffff' /> 
          </div>
        </div>
      </div>
      { (dropdownStatus) ? <Dropdown data={MOCK_FILTER} setFilter={(v)=>setAppliedFilter(v)}/> : '' }
    </div>
  );
}

function mapStateToProps(state){
  return ({
    projects: state.portfolio.data,
    userId: state.user.uid
  });
}

export default connect(mapStateToProps)(PortfolioInfo);
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import ProjectInfo from './ProjectInfo';
import ProjectFlow from './ProjectFlow';
import ProjectBudgetsTab from './ProjectBudgetsTab';
import ProjectBudgetsTabOptions from './ProjectBudgetsTabOptions';
import ProjectBudgetBoard from './ProjectBudgetBoard';
import ProjectBoard from './ProjectBoard';
import { loadProjectBySlug } from './../../redux/actions/projectActions';
import './project.sass';

function Project( { dispatch, userId } ) {
  let urlQuery = useRouteMatch()
  let urlSlug = urlQuery.params.projectSlug;
  const [ view, setView ] = useState('');

  useEffect(() => {
    if( urlSlug !== undefined ){ dispatch(loadProjectBySlug(urlSlug, userId)) }
  }, [ urlSlug ]);

  function renderCurrentTab(){
    if(view === 'all'){
      return (<ProjectBoard />)
    } else {
      return (<ProjectBudgetBoard view={view} />)
    }
  }

  return (
    <div className='project__container'>
      <div className='project__side'>
        <ProjectFlow />
      </div>
      <div className='project__main'>
        <ProjectInfo />
        <ProjectBudgetsTabOptions view={(selectedView)=>{setView(selectedView)}}/>
        <ProjectBudgetsTab view={(selectedView)=>{setView(selectedView)}}/>
        {renderCurrentTab()}
      </div>
    </div>
  );
}

function mapStateToProps(state){
  return ({
    userId: state.user.uid,
  });
}

export default connect(mapStateToProps)(Project);
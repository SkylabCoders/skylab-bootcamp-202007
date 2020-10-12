import React from 'react';
import { connect } from 'react-redux';
import './projectInfo.sass';

function ProjectInfo( { title } ) {
  return (
    <div className="projectInfo__container">
      <div className='info__main'>
        <h2>{title}</h2>
      </div>
    </div>
  );
}

function mapStateToProps(state){
  const ProjectTitle = ( state.project.current.title === undefined ) ? 'loading data...' : state.project.current.title;
  return ({
    title: ProjectTitle,
  });
}

export default connect(mapStateToProps)(ProjectInfo);
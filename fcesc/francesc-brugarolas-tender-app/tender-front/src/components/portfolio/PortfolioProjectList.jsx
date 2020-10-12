import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PortfolioProjectItem from './PortfolioProjectItem';
import './portfolioProjectList.sass';
import { loadProjectsByUserId } from '../../redux/actions/portfolioActions';
import Spinner from '../common/Spinner';

function PortfolioProjectList( { dispatch, projects, userId } ) {
  const [ statusFilters, setStatusFilters ] = useState([]);

  useEffect(()=>{
    if( Object.keys(projects).length === 0 && projects.constructor === Object ){
      dispatch(loadProjectsByUserId(userId));
    }
  }, [ ]);

  useEffect(()=>{
    if( Object.keys(projects).length !== 0 ){
      const filterOptions = projects.map(project=>project.status).filter((v, i, a) => a.indexOf(v) === i);
      setStatusFilters(filterOptions);
    }
  }, [ projects ])

  return (
    ( Object.keys(projects).length === 0 && projects.constructor === Object ) ? (<Spinner/>) : (
      <div className="portfolioProjectList__container">
        <ul>
         {projects.map(project => { 
            return (<PortfolioProjectItem key={project._id} project={project}/>)
          })}
        </ul>      
      </div>
    )
  );
}

function mapStateToProps(state){
  return ({
    projects: state.portfolio.data,
    userId: state.user.uid
  });
}


export default connect(mapStateToProps)(PortfolioProjectList);
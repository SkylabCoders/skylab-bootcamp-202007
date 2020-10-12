import React from 'react';
import './projectBudgetsTabOptions.sass';
import AddIcon from '@material-ui/icons/Add';
import TuneIcon from '@material-ui/icons/Tune';
import SortByAlphaIcon from '@material-ui/icons/SortByAlpha';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';

function ProjectBudgetsTabOptions({ view }) {

  return (
    <div className="projectBudgetOptions__tab">
      <div className='tab__left'>
        <div className='tab__item tab__text' onClick={(event)=>{event.preventDefault(); view('all')}}>
          <p>Budgets summary</p>
        </div>
      </div>
      <div className='tab__right'>
        <div className='tab__item tab__icon'>
          <AddIcon className='icon' htmlColor='ffffff' />
        </div>
        <div className='tab__item tab__icon'>
          <TuneIcon className='icon' htmlColor='#ffffff' />
        </div>
        <div className='tab__item tab__icon'>
          <SortByAlphaIcon className='iconRight' htmlColor='#ffffff' />
        </div>
        <div className='tab__item tab__icon tab__right'>
          <AspectRatioIcon className='iconRight' htmlColor='#ffffff' />
        </div>
      </div>
    </div>
  );
}

export default ProjectBudgetsTabOptions;
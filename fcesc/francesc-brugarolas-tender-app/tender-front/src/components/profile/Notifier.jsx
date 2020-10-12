import React, { useState } from 'react';
import './notifier.sass';
import UpdatesListItem from './UpdatesListItem';

function Notifier({ user }) {
  const [ userName ] = useState( user.name || 'loading data...' );
  const newsFeed = [
    {'title': 'An event was added to the project', 'root': '/project/', 'slug': 'house-spanish-wells-bahamas' }, 
    {'title': 'Budget was updated', 'root': '/project/', 'slug': 'house-spanish-wells-bahamas/5f5692eec76df948689ed9bb' },
    {'title': 'A budget is now behind schedule', 'root': '/project/', 'slug': 'house-spanish-wells-bahamas/5f5692eec76df948689ed9bb' }, 
    {'title': 'A new project was added in your portfolio', 'root': '/portfolio/', 'slug': '' }
  ];

  return (
    <section className='notifier'>
      <div className='notifier__title'>
        <h2>Welcome back, {userName}!</h2>
        <p>4 projects have updates since your last login. Click on the links below to acces them:</p>
      </div>
      <div className='notifier__updatesList'>
        {newsFeed.map((item, index) => { 
            return (<UpdatesListItem key={index} item={item}/>)
        })}
      </div>
    </section>
  );
}

export default Notifier;
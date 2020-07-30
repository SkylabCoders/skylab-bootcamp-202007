import React from 'react';
import './Dashboard.css';

function Dashboard({heroesList}) {
    return (
        <div className='containerDash'>
            {heroesList}
        </div>
    )
}

export default Dashboard;
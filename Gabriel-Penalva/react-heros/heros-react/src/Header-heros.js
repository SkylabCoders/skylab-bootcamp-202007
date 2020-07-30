import React from 'react';

function Header({ renderList, renderDashboard }) {
    return (
        <div className='header'>
            <h1>Tour of Heroes</h1>
            <div className="flex-row buttons">
                <div onClick={renderList}><a  >List</a></div>
                <div onClick={renderDashboard}><a  >Heroes</a></div></div>
        </div>
    )
}

export default Header;
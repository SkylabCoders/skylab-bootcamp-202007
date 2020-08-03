import React from 'react';
import Welcome from './Welcome'
import Item from './Item'
import './../css/Dashboard.css'

function Dashboard(){
    return (
        <>
            <div className="dashboard__container">
                <Welcome />
                <Item />
                <Item />
                <Item />
                <Item />
            </div>
        </>
    )
}

export default Dashboard;
import React from 'react';


function Dashboard( {heroes} ) {
    return <div className="row">
        <div className="col-3">{heroes[0].name}</div> 
        <div className="col-3">{heroes[1].name}</div> 
        <div className="col-3">{heroes[2].name}</div> 
        <div className="col-3">{heroes[3].name}</div> 
    </div>;
}

export default Dashboard;

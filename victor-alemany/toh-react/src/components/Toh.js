import React from 'react';
import Dashboard from './Dashboard';
import Detail from './Detail';
import List from './List';
import heroList from '../components/hero.mock';


function Toh(props) {
    return (
        <div className="container">
            <h1>Tour of Heroes</h1>
            <div className="header">
                <button>dashboard</button><button>Heroes</button>
            </div>
                <Detail />
                <div>
                <List heroes={heroList}/>
                </div>
                <Dashboard/>
                
        </div>
        )
    }

export default Toh;
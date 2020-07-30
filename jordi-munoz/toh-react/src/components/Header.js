import React from 'react';
import './Header.css';

function Header({clickDash}) {
    return (
        <div className="fix-header">
            <div className="fix-header__title">
                <h1>Tour of Heroes</h1>
            </div>
            <div className="fix-header__buttons">
                <button>Detail</button>
                <button>Heroes</button>
                <button onClick={clickDash}>Dashboard</button>
            </div>
        </div>
    )
}

export default Header;
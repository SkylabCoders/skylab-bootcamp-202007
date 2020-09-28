import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

const HeaderLogin = () => {
    return (
        <>
            <section className="header-contain">
                <div className="nav">
                    <Link to="#" className="nav__arrow"></Link>
                    <Link to="/" className="nav__logo"></Link>
                    <Link to="/cart" className="nav__cart"></Link>
                </div>
            </section>
        </>
    )
}

export default HeaderLogin;
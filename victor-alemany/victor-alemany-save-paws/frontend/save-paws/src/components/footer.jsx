import '../css/footer.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

function Footer() {
    const {isAuthenticated} = useAuth0();

    return (
        <footer className="footer">
            <div className="footer__container">
            <div className="back__button__container">
                <button className="create__button">
                    <Link to="/">&lt;</Link>
                </button>
            </div>
            <div className="logo__name">
                <h5>
                    Save paws -<span className="footer__span">Animal rescue</span>
                </h5>
                <div className="footer__menu">
                    <Link to="/">Home</Link>
                    <Link to="/categories">By categories</Link>
                    <Link to="/alerts">Show list</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
                <div className="inner__footer">
                    <small>Copyright 2020 Save paws</small>
                </div>
        {isAuthenticated && (
            <div className="create__button__container">
                <button className="create__button">
                    <Link to="/newalert">+</Link>
                </button>
            </div>)}
            </div>
        </footer>
    );
}

export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';
import './footer.scss';

function Footer() {
    return (
        <footer className="footer-container">
            <div className="separator-small-footer"></div>
            <Link to="/" className="footer-link-logo">
                <img
                    className="image-logo"
                    src="https://trello-attachments.s3.amazonaws.com/5f4d74b3457c4e749f4bfea6/847x748/f0abc621274604fc9ce77e7079853efb/GreatRead.png"
                    alt="The Great Read Logo"
                />
            </Link>

            <div className="footer-info">
                <p className="copyright">
                    2020 © The Great Read, S.L. - Vanesa Gómez Cucchiararo
                </p>
            </div>
        </footer>
    );
}

export default Footer;

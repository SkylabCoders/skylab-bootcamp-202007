import React from 'react';
import { Link } from 'react-router-dom';
import HeaderLogin from './HeaderLogin';
import FooterMobile from './FooterMobile';

const NotFoundPage = () => {
    return (
        <>
        <HeaderLogin />
        <div className="store-empty">
            <div className="store-empty__circle"></div> 
            <Link to="/" className="store-empty__home">404! Torna al Petit Comerç</Link>  
        </div>  
        <FooterMobile />
        </>
    );
};

export default NotFoundPage;



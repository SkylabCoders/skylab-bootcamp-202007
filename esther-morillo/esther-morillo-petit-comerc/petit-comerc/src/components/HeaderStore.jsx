import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { loadStores } from '../actions/storeActions';
import productStore from '../stores/productStore';
import './header.scss';

const HeaderStore = ({ storeId }) => {
    
    return (
        <>
            <section className="header-contain">
                <div className="nav">
                    <Link to="#" className="nav__arrow"></Link>
                    <Link to="/" className="nav__logo"></Link>
                    <Link to={`/info/${storeId}`} className="nav__info"></Link>
                </div>
            </section>
        </>
    );
};

export default HeaderStore;

import React from 'react';
import { Link } from 'react-router-dom';
import HeroList from './HeroList';

function HeroesPage() {
    return (
        <>
            <p>
                <Link to="/hero">+ Add Hero</Link>
            </p>
            <HeroList />
        </>
    );
}

export default HeroesPage;

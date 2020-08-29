import React from 'react';
import { NavLink } from 'react-router-dom';


function Header(){
    return(
        <nav>
        <NavLink to="/profile">Profile</NavLink>
        {'|'}
        <NavLink to="/recipe-page">Recipe</NavLink>
        {'|'}
        <NavLink to="/search-result">Search</NavLink>
        {'|'}
        <NavLink to="/userfavourite">User Favourite</NavLink>
        {'|'}
        <NavLink to="/userfavourite">Preferences</NavLink>
        {'|'}
        <NavLink to="/userfavourite">Search</NavLink>
        {'|'}
        <NavLink to="/userfavourite">Login</NavLink>
        </nav>
    );
}

export default Header;
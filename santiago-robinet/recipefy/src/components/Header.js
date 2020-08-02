import React from 'react';
import { NavLink } from 'react-router-dom';


function Header(){
    return(
        <>
        <NavLink to="/profile">Profile</NavLink>
        {'|'}
        <NavLink to="/recipe-page">Recipe</NavLink>
        {'|'}
        <NavLink to="/search-result">Search</NavLink>
        {'|'}
        <NavLink to="/userfavourite">User Favourite</NavLink>
          <p> I'm da Header!! And I work!!</p>
        </>
    );
}

export default Header;
import React, { useState } from 'react';
import './navComponent.css';
import { NavLink } from 'react-router-dom';

function NavComponent(props) {
    const [searchValue, setSearchValue] = useState();

    function onFieldChange(myEvent) {
        setSearchValue({
            [myEvent.target.name]: myEvent.target.value
        });
    }

    return (
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
            <a className="navbar-brand" href="#">
                <img src="https://i.pinimg.com/originals/a5/f9/a2/a5f9a2eb5c0bfb1f66988696e1f31334.png" width="30" height="" alt="Dragon Ball One Start" loading="lazy" />
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarsExample03">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active" >
                        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/planet">Planets</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/saga">Sagas</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link nav__button--game" href="#">Game</a>
                    </li>
                </ul>
                <form class="form-inline my-2 my-md-0">
                    <input class="form-control" type="text" placeholder="Dragon search..." />
                </form>
            </div>
        </nav>
    )
}

export default NavComponent;
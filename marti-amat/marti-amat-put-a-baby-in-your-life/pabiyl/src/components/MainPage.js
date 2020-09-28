import React, { useEffect, useState } from 'react';
import './mainPage.css';
import { NavLink } from 'react-router-dom';
import { login } from '../actions/AuthActions';
import authStore from '../stores/authStore';
import { loadDetails } from "../actions/detailAction";
import userStore from "../stores/userStore";
function MainPage(props) {
    const [userEmail, setUserEmail] = useState(authStore.getUserEmail());
    useEffect(() => {
        authStore.addChangeListener(onChange);
        setUserEmail(authStore.getUserEmail());
        console.log("AQUÏ TENIM LEMAIL", userEmail);

        return () => authStore.removeChangeListener(onChange);
    }, []);

    function onChange() {
        setUserEmail(authStore.getUserEmail());
    }

    return (

        <main className="main__main">
            <div className="title__main">Put a baby in your life</div>
            <div className="navigation__container">
                <NavLink to="/profile" className="navigation__text">PROFILE</NavLink>
                <NavLink to="/searchFilters/" className="navigation__text" >FIND USERS</NavLink>
                <NavLink to="/messages" className="navigation__text">MESSAGES</NavLink>
                <section className="main__footer">
                    <img
                        src="https://media-exp1.licdn.com/dms/image/C5603AQEZPiAr7_RCxA/profile-displayphoto-shrink_400_400/0?e=1602115200&v=beta&t=z8RyBtkp3SCyRZEnFBW1KU286hrCLlbxDYxbfSLyen8"
                        className="image__footer"
                    ></img>
                    <div className="text__footer">Martí Amat Vila</div>

                    <img
                        src="https://www.skylabcoders.com/images/403/default.png"
                        className="icon__footer"
                    ></img>
                </section>

            </div>
        </main >
    )
}
export default MainPage;

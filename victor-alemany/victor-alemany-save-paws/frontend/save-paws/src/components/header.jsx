import React, { useEffect, useState } from 'react';
import '../css/header.scss';
import { NavLink } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import userStore from './../stores/userStore';
import { loadUser } from './../actions/user.actions';
import HamburgerMenu from './hamburgerMenu';
import Navigation from './navigation';

function Header() {
    const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
    const [userLoaded, setUserLoaded] = useState(userStore.getUser());

    useEffect(() => {
        userStore.addChangeListener(onChange);

        if (!userLoaded) {
            loadUser(user?.sub);
        }

        return () => userStore.removeChangeListener(onChange);
    }, [userLoaded, user]);

    function onChange() {
        setUserLoaded(userStore.getUser());
    }

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return (
        <div className="wrapper">
            <header>

                
                <HamburgerMenu userLoaded={userLoaded?._id}/>
                <div className="logo">
                    <img
                        src={require('../assets/logo2.png')}
                        alt="animal"
                    ></img>
                </div>
                <Navigation userLoaded={userLoaded?._id} />
                <div className="login__image">
                    {isAuthenticated ? (
                        <NavLink to="/profile">
                            <div className="logo__loggedin">
                                <img
                                    src="https://image.flaticon.com/icons/svg/3011/3011270.svg"
                                    alt="login logo"
                                />
                            </div>
                        </NavLink>
                    ) : (
                        <NavLink to="" onClick={() => loginWithRedirect()}>
                            <img src={require('../assets/login.svg')} alt="" />
                        </NavLink>
                    )}
                </div>
            </header>
        </div>
    );
}

export default Header;
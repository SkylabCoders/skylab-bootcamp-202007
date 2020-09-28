import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import './footerMobile.scss';

const FooterMobile = ({ history }) => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const { loginWithRedirect } = useAuth0();
    const [clickSearch, setClickSearch] = useState(false); 
    const [search, setSearch] = useState();

    function onClickSearch(event, clickSearch) {
        event.preventDefault();

        if (!clickSearch) {
            setClickSearch(true);
        } else {
            setClickSearch(false);
        }
    }

    return (
        <>
            <section className="footer-contain">
                <div className="footer-nav">
                    <Link to="#" className="footer-nav__box">
                        <div className="news"></div>
                        <p className="news-text">Notícies</p>
                    </Link>

                    {!clickSearch && (
                        <Link
                            to="#"
                            className="footer-nav__box"
                            onClick={(event) =>
                                onClickSearch(event, clickSearch)
                            }
                        >
                            <div className="search"></div>
                            <p className="search-text">Cerca</p>
                        </Link>
                    )}

                    {clickSearch && (
                        <form >
                            <input type="text" className="input-search" value={search}
                                onChange={(event) => setSearch(event.target.value)} 
                            />
                        </form>
                    )}

                    {!isAuthenticated && (
                        <Link
                            to="#"
                            className="footer-nav__box"
                            onClick={() => loginWithRedirect()}
                        >
                            <div className="login"></div>
                            <p className="login-text">Compte</p>
                        </Link>
                    )}

                    {isAuthenticated && (
                        <Link to="/auth/profile" className="footer-nav__box">
                            <div className="login"></div>
                            <p className="login-text">Perfil</p>
                        </Link>
                    )}
                </div>
            </section>
        </>
    );
};

export default withRouter(FooterMobile);

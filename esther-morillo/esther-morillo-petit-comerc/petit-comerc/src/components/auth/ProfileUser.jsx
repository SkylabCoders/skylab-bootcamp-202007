import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { createUser } from '../../actions/userActions';
import HeaderLogin from '../HeaderLogin';
import FooterMobile from '../FooterMobile';
import loading from '../../assets/images/loading.gif'
import './profile.scss';

const ProfileUser = (props) => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <img className="loading" src={loading} alt="loading..." />
    }

    if (isAuthenticated)
        createUser({
            owner: false,
            sub: user?.sub,
            userName: user?.name,
            emailUser: user?.email
        });

    return (
        <>
            <HeaderLogin />
            <div className="profile"></div>
            {isAuthenticated && (
                <section className="profile-contain">
                    <div className="profile-menu">
                        <div className="profile-menu__column">
                            <div className="profile-menu__user">
                                <img
                                    className="profile-menu__image"
                                    src={user?.picture}
                                    alt={user.name || user.email}
                                />
                                <h3 className="profile-menu__text">
                                    {user.name}
                                </h3>
                            </div>

                            <Link
                                to="/auth/profile"
                                className="profile-menu__btn active"
                            >
                                Perfil
                            </Link>
                            <Link to="/cart" className="profile-menu__btn">
                                Cistella
                            </Link>
                        </div>
                    </div>

                    <div className="profile-settings">
                        <div className="profile-image">
                            <img src={user.picture} alt={user.name} />
                        </div>
                        <p className="profile-text">{`Hola ${
                            user.name || user.email
                        }!`}</p>

                        <Link to="/" className="profile-button__yellow">
                            anar a fer una ullada
                        </Link>

                        <Link
                            to="/auth/store"
                            className="profile-button__yellow black"
                        >
                            tens una botiga?
                        </Link>
                    </div>
                </section>
            )}
            <FooterMobile />
        </>
    );
};

export default ProfileUser;

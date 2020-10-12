import React from 'react';
import { Link } from 'react-router-dom';

function Userfollow(props) {
    return (
        <>
            <div className="user__container">
            <div className="banner__container">
                        <h2>Followed alerts</h2>
                        <img
                            src="https://i.pinimg.com/564x/00/3e/06/003e0626a803c6628d7d7904b652513c.jpg"
                            alt="header logo"
                        ></img>
                    </div>
                <div className="created__container">
                    <ul className="user__list__container">
                        {props.alertsByFollow.map((alert) => (
                            <li key={alert._id} className="item__user__list">
                                <div>
                                    <img
                                        className="user__list__image"
                                        src={alert.image}
                                        alt="list animal"
                                    />
                                </div>
                                <Link to={`/alerts/${alert._id}`}>
                                    <div className="user__alert__title">
                                        <p>BASIC INFORMATION</p>
                                    </div>
                                    <div className="user__title__container">
                                        <p>{alert.city}</p>
                                        <p>{alert.date}</p>
                                        <p>{alert.animal}</p>
                                        {alert.active ? (
                                            <p>Active alert</p>
                                        ) : (
                                            <p>Inactive alert</p>
                                        )}
                                        <p></p>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Userfollow;

import React from 'react';
import { Link } from 'react-router-dom';

function UserCreated(props) {
    return (
        <>
            <div className="user__container">
                <div className="banner__container">
                        <h2>Created alerts</h2>
                        <img
                            src="https://i.pinimg.com/564x/00/3e/06/003e0626a803c6628d7d7904b652513c.jpg"
                            alt="header logo"
                        ></img>
                    </div>
                <div className="created__container">
                    <ul className="user__list__container">
                        {props.alertsByUser.map((alert) => (
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
                                        <p className="">{alert.city}</p>
                                        <p className="">{alert.date}</p>
                                        <p className="">{alert.animal}</p>
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

export default UserCreated;

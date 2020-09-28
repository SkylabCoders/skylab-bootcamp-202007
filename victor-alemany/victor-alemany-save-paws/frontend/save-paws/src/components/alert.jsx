import React, { useEffect, useState } from 'react';
import {
    foundAlert,
    updateAlertComments,
    followAlert,
    loadAlertById
} from '../actions/alert.actions';
import alertStore from '../stores/alertStore';
import '../css/alert.scss';
import { useAuth0 } from '@auth0/auth0-react';
import { loadUser } from '../actions/user.actions';
import userStore from '../stores/userStore';

import Map from '../components/map';

function Alert(props) {
    // Alert hooks
    const [comments, setComments] = useState('');
    const [alertLoaded, setAlertLoaded] = useState('');

    // User hooks
    const { user, isAuthenticated, isLoading} = useAuth0();
    const [userLoaded, setUserLoaded] = useState(userStore.getUser());
    const [isFollowed, setIsFollowed] = useState(false);
    const [isFound, setIsFound] = useState(false);

    useEffect(() => {
        userStore.addChangeListener(onChange);

        if (!userLoaded) {
            loadUser(user?.sub);
        }
        return () => userStore.removeChangeListener(onChange);
    }, [userLoaded, user?.sub]);

    useEffect(() => {
        alertStore.addChangeListener(onChange);

        if (!alertLoaded) loadAlertById(props.match?.params.alertId);
        else if (userLoaded) {
            const checked = alertLoaded.followed.includes(userLoaded._id);
            checked ? setIsFollowed(true) : setIsFollowed(false);

            setIsFound(alertLoaded.active);
        }

        return () => alertStore.removeChangeListener(onChange);
    }, [alertLoaded, props.match?.params.alertId]);

    function onChange() {
        setAlertLoaded(alertStore.getAlertById());
        setUserLoaded(userStore.getUser());
    }

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return (
        alertLoaded && (
            <>
                <div className="alert__container">
                    <div className="alert__section">
                        <div className="image__container">
                            <img src={alertLoaded.image} alt="animal"></img>
                        </div>
                        <div className="alert__description">
                            <div className="inner__container">
                                <div className="info__title">
                                    <p>ALERT INFORMATION</p>
                                </div>
                                <div className="box__wrapper">
                                    <div className="info__inner_container">
                                        <p className="info__sub-title">Name</p>
                                        <p>{alertLoaded.name}</p>
                                    </div>
                                    <div className="info__inner_container">
                                        <p className="info__sub-title">Breed</p>
                                        <p>{alertLoaded.breed}</p>
                                    </div>
                                    <div className="info__inner_container">
                                        <p className="info__sub-title">City</p>
                                        <p>{alertLoaded.city}</p>
                                    </div>
                                    <div className="info__inner_container">
                                        <p className="info__sub-title">
                                            Gender
                                        </p>
                                        <p>{alertLoaded.gender}</p>
                                    </div>
                                    <div className="info__inner_container">
                                        <p className="info__sub-title">
                                            Weight
                                        </p>
                                        <p>{alertLoaded.weight}</p>
                                    </div>
                                    <div className="info__inner_container">
                                        <p className="info__sub-title">Date</p>
                                        <p>{alertLoaded.date}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="description__container">
                        <div className="info__title">
                            <p>DESCRIPTION</p>
                        </div>
                        <p>{alertLoaded.description}</p>
                    </div>

                    <div className="comments__area">
                        <div className="comments__section">
                            <div className="info__title">
                                <p>LOCATION & COMMENTS</p>
                            </div>
                            <div className="map">
                                <Map
                                    latitude={alertLoaded.coordenates[0]}
                                    longitude={alertLoaded.coordenates[1]}
                                />
                            </div>
                            <div className="comments__input">
                                <div className="comment__box">Comments: <br></br><br></br>{alertLoaded.comments}</div>
                                <textarea
                                    placeholder="Add your comments here with the date, please!"
                                    value={comments}
                                    onChange={(event) =>
                                        setComments(event.target.value)
                                    }
                                ></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="button__container__alert">
                        {isAuthenticated && alertLoaded && userLoaded && (
                            <>
                                <button
                                    type="submit"
                                    className="button"
                                    onClick={async () => {
                                        updateAlertComments(
                                            props.match?.params?.alertId,
                                            comments
                                        );
                                    }}
                                >
                                    Save changes
                                </button>
                                {isFound ? (
                                    <button
                                        type="submit"
                                        className="button"
                                        onClick={() => {
                                            foundAlert(
                                                props.match?.params?.alertId,
                                                'false'
                                            ); setIsFound(false)}
                                        }
                                    >
                                        Mark as found!
                                    </button>
                                ):<button
                                type="submit"
                                className="button"
                                onClick={() => {
                                    foundAlert(
                                        props.match?.params?.alertId,
                                        'true'
                                    ); setIsFound(true)}
                                }
                            >
                                Reactivate
                            </button>}

                                {!isFollowed ? (
                                    <button
                                        type="submit"
                                        className="button"
                                        onClick={() => {
                                            followAlert(
                                                props.match?.params?.alertId,
                                                userLoaded._id
                                            );
                                        }}
                                    >
                                        Follow!
                                    </button>
                                ) : (
                                    <button
                                        type="submit"
                                        className="button"
                                        onClick={() => {
                                            followAlert(
                                                props.match?.params?.alertId,
                                                userLoaded._id
                                            );
                                        }}
                                    >
                                        Unfollow!
                                    </button>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </>
        )
    );
}

export default Alert;

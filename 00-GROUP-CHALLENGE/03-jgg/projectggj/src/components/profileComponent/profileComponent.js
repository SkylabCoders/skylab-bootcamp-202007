import React, { useEffect, useState } from 'react';
import { logout } from '../../actions/authAction/authAction'
import { Link } from 'react-router-dom';
import './profileComponent.css'
import authStore from '../../stores/authStore'




function ProfileComponent() {

    const [isLogged, setIsLogged] = useState(authStore.isLogged());
/*     const [user, setUser] = useState(authStore.getUserProfile());
 */    const [email, setEmail] = useState('');
/*     const [password, setPassword] = useState('');
 */    const [userName, setUserName] = useState(authStore.getUserName());
    const [userPhoto, setUserPhoto] = useState(authStore.getUserPhoto());

    useEffect(() => {
        authStore.addChangeListener(onAuthChange);

        return () => authStore.removeChangeListener(onAuthChange);
    }, [isLogged, email, userPhoto]);

    //Is activated in ChangeListener and controls the flux of the log
    function onAuthChange() {
/*         setIsLogged(authStore.isLogged());
         setUser(authStore.getUserProfile());
 */        setUserName(authStore.getUserName());
        setUserPhoto(authStore.getUserPhoto());
    }
    return (
        <div className="details-holder">
            <div className="flex-item">
                <div className="row">
                    <div className="detail-container flex-item">
                        <div className="card hovercard">
                            <div className="photoProfile"></div>
                            <div className="avatar">
                                {userPhoto &&
                                    <img src={userPhoto} alt="user logo"></img>
                                }
                                {!userPhoto &&
                                    <img src="https://w7.pngwing.com/pngs/304/275/png-transparent-user-profile-computer-icons-profile-miscellaneous-logo-monochrome.png" alt="user profile"></img>
                                }
                                {/*                                 <img alt="" src={char.image}></img>
 */}                            </div>

                            <div className="info">
                                <div className="title">
                                    <div>
                                        PROFILE
                                    </div>
                                </div>
                                <div className="details-desc-content">
                                    <div className="details-desc">
                                        FULL NAME: <span>{userName || 'Undefined'}</span>
                                    </div>
                                    <div className="details-desc">
                                        EMAIL: <span>{email || 'Undefined'}</span>
                                    </div>
                                    <div className="details-desc">
                                        RACE: <span>Human</span>
                                    </div>
                                    <div className="details-desc">
                                        STATUS: <span>Alive</span>
                                    </div>
                                    <div className="details-desc">
                                        PLANET: <span>Earth</span>
                                    </div>
                                    <div className="details-desc">
                                        Nº OF VICTORIES: <span>0</span>
                                    </div>
                                    <div className="details-desc">
                                        Nº OF DEFEATS: <span>0</span>
                                    </div>
                                    {/*                                     <div className="details-desc">
                                        GENDER: <span>{char.gender}</span>
                                    </div> */}
                                    <p>Do you want to increase your victories?</p>
                                    <Link to="/game/:enemy">Click here to fight!</Link>

                                </div>
                                <div >
                                    <button onClick={(event) => { event.preventDefault(); logout() }} className="'row figthlink btn'">
                                        <Link to="/login" >Logout</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileComponent;
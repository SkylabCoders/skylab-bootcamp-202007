import React, { useEffect, useState } from 'react';
import { logout } from '../../actions/authAction/authAction'
import { Link } from 'react-router-dom';
import './profileComponent.scss'
import authStore from '../../stores/authStore'
import store from '../../stores/store'




function ProfileComponent() {

    const [isLogged] = useState(authStore.isLogged());
    //     const [user, setUser] = useState(authStore.getUserProfile());
    const [email] = useState('');
    //  const [password, setPassword] = useState('');
    const [userName, setUserName] = useState(authStore.getUserName());
    const [userPhoto, setUserPhoto] = useState(authStore.getUserPhoto());
    const [wins] = useState(store.getWins());
    const [loss] = useState(store.getLoss());

    useEffect(() => {
        authStore.addChangeListener(onAuthChange);

        return () => authStore.removeChangeListener(onAuthChange);
    }, [isLogged, email, userPhoto, wins, loss]);

    //Is activated in ChangeListener and controls the flux of the log
    function onAuthChange() {
        /*         setIsLogged(authStore.isLogged());
                 setUser(authStore.getUserProfile());*/
        setUserName(authStore.getUserName());
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
                                {/*  <img alt="" src={char.image}></img>*/}
                            </div>

                            <div className="info">
                                <div className="title">
                                    <div>
                                        PROFILE
                                    </div>
                                </div>
                                <div className="profile-desc-content text-profile">
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
                                        Nº OF VICTORIES: <span>{wins}</span>
                                    </div>
                                    <div className='details-desc'>
                                        {wins > 0 && <img src='https://i.pinimg.com/originals/a5/f9/a2/a5f9a2eb5c0bfb1f66988696e1f31334.png'
                                            alt='Bola de drac 1'></img>}
                                        {wins > 1 && <img src='https://i.pinimg.com/originals/0b/72/75/0b72755a5ea5e1999d6fbfd3aa544355.png'
                                            alt='Bola de drac 2'></img>}
                                        {wins > 2 && <img src='https://i.pinimg.com/originals/32/eb/b8/32ebb8536d0fa4108eef460694586d39.png'
                                            alt='Bola de drac 3'></img>}
                                        {wins > 3 && <img src='https://i.pinimg.com/originals/7a/7f/76/7a7f76ea01702078582a1ae8b7344fb3.png'
                                            alt='Bola de drac 4'></img>}
                                        {wins > 4 && <img src='https://i.pinimg.com/originals/13/19/62/1319628426fa9d3783705daf7db525f8.png'
                                            alt='Bola de drac 5'></img>}
                                        {wins > 5 && <img src='https://i.pinimg.com/originals/6c/72/47/6c7247dfb67e18add93d682dc9fdabcc.png'
                                            alt='Bola de drac 6'></img>}
                                        {wins > 6 && <img src='https://www.pngkit.com/png/full/5-53180_dragon-ball-z-dbz-son-goku-deviantart-anime.png'
                                            alt='Bola de drac 7'></img>}
                                    </div>
                                    <div className="details-desc">
                                        Nº OF DEFEATS: <span>{loss}</span>
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
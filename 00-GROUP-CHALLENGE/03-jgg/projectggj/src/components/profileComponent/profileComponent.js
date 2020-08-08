import React from 'react';
import { logout } from '../../actions/authAction/authAction'
import { Link } from 'react-router-dom';
import './profileComponent.css'

function ProfileComponent() {
    return (
        <div className="details-holder">
            <div className="flex-item">
                <div className="row">
                    <div className="detail-container flex-item">
                        <div className="card hovercard">
                            <div className="photoProfile"></div>
                            <div className="avatar">
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
                                        FULL NAME: <span>Name profile</span>
                                    </div>
                                    <div className="details-desc">
                                        EMAIL: <span>Name profile</span>
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
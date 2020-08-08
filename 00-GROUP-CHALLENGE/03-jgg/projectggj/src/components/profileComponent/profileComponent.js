import React from 'react';
import { logout } from '../../actions/authAction/authAction'
import { Link } from 'react-router-dom';


function ProfileComponent() {
    return (
        <div className="details-holder">
            <div className="flex-item">
                <div className="row">
                    <div className="detail-container flex-item">
                        <div className="card hovercard">
                            <div className="cardheader"></div>
                            <div className="avatar">
                                {/*                                 <img alt="" src={char.image}></img>
 */}                            </div>

                            <div className="info">
                                <div className="title">
                                    <a target="_blank" href="/">
                                        PROFILE
                                    </a>
                                </div>
                                <div className="details-desc-content">
                                    <div className="details-desc">
                                        NAME: <span>Human</span>
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
                                    {/*                                     <div className="details-desc">
                                        GENDER: <span>{char.gender}</span>
                                    </div> */}

                                </div>
                                <div >
                                    <Link to="/login" >
                                        <button onClick={(event) => { event.preventDefault(); logout() }} className="m-1 mt-3 mb-3 btn-warning btn-lg btn-block">Logout</button>
                                    </Link>
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
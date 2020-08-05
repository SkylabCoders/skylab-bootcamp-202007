import React, { useState, useEffect } from 'react';
import store from '../../stores/store';
import { loadCharList } from '../../actions/actions';
import './detailsComponent.css'
function DetailsComponent(props) {

    // let [chars, setChars] = useState(store.getCharacters());
    let char = {};
    const name = props.match.params.name;
    char = store.getCharByName(name);
    if (!char)
        char = {
            image: ""
        }
    return (
        <div classNameName='details-holder'>
            <div className="flex-item">
                <div className="row">
                    <div className="detail-container flex-item">

                        <div className="card hovercard">
                            <div className="cardheader">

                            </div>
                            <div className="avatar">
                                <img alt="" src={char.image}></img>
                            </div>

                            <div className="info">
                                <div className="title">
                                    <a target="_blank" href="https://scripteden.com/">{char.name}</a>
                                </div>
                                <div className='details-desc-content'>
                                    <div className="details-desc">RACE: <span>{char.species}</span></div>
                                    <div className="details-desc">STATUS: <span>{char.status}</span></div>
                                    <div className="details-desc">PLANET: <span>{char.originPlanet}</span></div>
                                    <div className="details-desc">GENDER: <span>{char.gender}</span></div>
                                    <div className="details-desc">SERIE: <span>{char.series}</span></div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}


export default DetailsComponent;
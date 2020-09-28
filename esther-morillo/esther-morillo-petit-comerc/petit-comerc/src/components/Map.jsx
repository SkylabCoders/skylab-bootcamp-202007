import React from 'react';
import MapGoogle from './MapGoogle';
import './Map.scss';

function Map ({ storeName, web, description, address, postalCode, city, phone, email, workingHours }) {

    return (
        <>
        <section className="info-store">
            <div>
                <MapGoogle address={address}/>                
            </div>

            <div className="info-main">
                <div className="info-main__title">
                    <h3 className="info__title">{storeName}</h3>
                    <div className="info">
                        <div className="web"></div>
                        <a href={`https://${web}/`} target="_blank" className="info__web">{web}</a>
                    </div>
                </div>
                <p className="info__description">{description}</p>
                <div className="info-line"></div>

                <div className="info-text">
                    <div className="info">
                        <div className="check"></div>
                        <p>Recollida a l'establiment</p>
                    </div>
                    <div className="info address-spacing">
                        <div className="address"></div>
                        <p>{address}</p>
                    </div>
                    <div className="info pc-city">
                        <p className="postal-code">{postalCode}</p>
                        <p className="city">{city}</p>
                    </div>
                    <div className="info">
                        <div className="phone"></div>
                        <p>{phone}</p>
                    </div>
                    <div className="info">
                        <div className="email"></div>
                        <p>{email}</p>
                    </div>
                </div>

                <div className="info-hours">
                    <p className="info-hours__title">Horari de recollida a l'establiment</p>
                    <p className="info-hours__text">{workingHours}</p>
                </div>
            </div>
        </section>
        </>
    )

}

export default Map;
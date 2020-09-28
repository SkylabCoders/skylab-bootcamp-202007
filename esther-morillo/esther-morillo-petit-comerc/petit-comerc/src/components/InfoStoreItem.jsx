import React from 'react';
import { Link } from 'react-router-dom';
import './storeList.scss';

const StoreListItem = ({ id, storeImage, storeName, categories }) => {
   
    return (
        <>
        <section className="store-section">
            
            <Link to={`/${id}`} className="image-main">
                <img className="image" src={storeImage} alt={storeName}/>
                <div className="white-box">
                <Link 
                    className="white-box__category"
                    to={`/products/${categories}`}
                >{categories}
                </Link>
                <div className="white-box__line"></div>
                <h2 className="white-box__title">{storeName}</h2>
                <div className="yellow-box__date">
                    <div className="date__time"></div>
                    <p className="date__text">Fins dilluns 15 a les 23'59h.</p>
                    <div className="date__next"></div>
                </div>
            </div>
            </Link>
           
        </section>
        </>
    )
}

export default StoreListItem;
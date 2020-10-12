import React from 'react';
import { Link } from 'react-router-dom';
import ButtonYellow from './ButtonYellow';
import './productDetail.scss';
import './buttonYellow.scss';

const ProductDetailItem = ({
    product,
    image,
    name,
    off,
    price,
    currentPrice,
    sizes,
    description
}) => {
   
    return (
        <>
            <section className="detail-container">
                <div className="detail-main">
                    <div className="detail-image">
                        <img
                            className="detail-image__cover"
                            src={image}
                            alt={name}
                        />
                    </div>

                    <div className="detail-column">
                        <div className="detail-center">
                            <h2 className="detail-title">{name}</h2>
                            <div className="detail-offer">
                                <div className="detail-offer__off">
                                    <p className="detail-offer__off-box">-{off}%</p>
                                </div>
                                <p className="detail-offer__price">{price}€</p>
                            </div>
                            <div className="detail-price">
                                {currentPrice}€
                                <p className="detail-vat">IVA inclòs</p>
                            </div>
                        </div>

                        <div className="size-quantity__block">
                            <div className="detail-line"></div>

                            <div className="detail-subpart">
                                <div className="detail-subpart__title">
                                    Talles
                                    <div className="detail-size">
                                        {sizes.map((size) => (
                                            <ul key={size}>
                                                <Link className="detail-size__item">
                                                    {size}
                                                </Link>
                                            </ul>
                                        ))}
                                    </div>
                                </div>

                                <div className="detail-subpart__title detail-quantity">
                                    Quantitat
                                    <input
                                        className="detail-input__quantity"
                                        type="number"
                                        placeholder="1"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="size-quantity__none">
                    <div className="detail-line"></div>

                    <div className="detail-subpart">
                        <div className="detail-subpart__title">
                            Talla
                            <div className="detail-size">
                                {sizes.map((size) => (
                                    <ul key={size}>
                                        <Link className="detail-size__item">
                                            {size}
                                        </Link>
                                    </ul>
                                ))}
                            </div>
                        </div>

                        <div className="detail-subpart__title detail-quantity">
                            Quantitat
                            <input
                                className="detail-input__quantity"
                                type="number"
                            />
                        </div>
                    </div>
                </div>

                <div className="detail-line"></div>

                <div className="detail-description__container">
                    <div className="detail-subpart__title title-margin">
                        Descripció
                    </div>
                    <p className="detail-description">{description}</p>
                </div>
            </section>
            <ButtonYellow 
            product={product}
            />
        </>
    );
};

export default ProductDetailItem;

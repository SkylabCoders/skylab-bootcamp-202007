import React, { useEffect, useState } from 'react';
import TextInput from './TextInput';
import productStore from '../../stores/productStore';
import './profile.scss';
import bckImage from '../../assets/images/bck-image-products.jpg';

function StoreFormProducts(props) {
    function refreshPage() {
        window.location.reload(false);
    }

    return (
        <form onSubmit={props.onSubmit}>
            <div className="flex-row">
                <div className="space">
                 
                    <img className="bck-image" src={bckImage} alt="background-image-default" />

                    <div className="label-column">
                        <TextInput
                            id="image"
                            label="Imatge del producte (URL)"
                            name="image"
                            value={props.dataProduct.image}
                            onChange={props.onChange}
                            required
                        />
                    </div>

                    <div className="label-column">
                        <TextInput
                            id="productName"
                            label="Nom del producte"
                            name="productName"
                            value={props.dataProduct.productName}
                            onChange={props.onChange}
                            required
                        />
                    </div>
                </div>


                <div className="p-colum">

                    <div className="label-column">
                        <label>Quantitat</label>
                        <input
                            id="amount"
                            name="amount"
                            type="number"
                            value={props.dataProduct.amount}
                            onChange={props.onChange}
                            required
                        />
                    </div>

                    <div className="label-column">
                        <TextInput
                            id="price"
                            label="Preu"
                            name="price"
                            value={props.dataProduct.price}
                            onChange={props.onChange}
                            required
                        />
                    </div>

                    <div className="label-column">
                        <TextInput
                            id="off"
                            label="Percentatge d'oferta"
                            name="off"
                            value={props.dataProduct.off}
                            onChange={props.onChange}
                            required
                        />
                    </div>

                    <div className="label-column">
                        <TextInput
                            id="currentPrice"
                            label="Preu d'oferta"
                            name="currentPrice"
                            value={props.dataProduct.currentPrice}
                            onChange={props.onChange}
                            required
                        />
                    </div>
                 </div>
            </div>

            <div className="label-column sizes">
                <TextInput
                    id="sizes"
                    label="Talles"
                    name="sizes"
                    value={props.dataProduct.sizes}
                    onChange={props.onChange}
                    required
                />
            </div>

            <div className="label-column description">
                <label>Descripció</label>
                <textarea
                    id="description"
                    type="textarea"
                    rows="10"
                    cols="40"
                    name="description"
                    value={props.dataProduct.description}
                    onChange={props.onChange}
                    required
                />
            </div>

            <input
                type="submit"
                className="profile-button__yellow padding"
                value="crear producte"
                onClick={() => refreshPage()}
            />
        </form>
    );
}

export default StoreFormProducts;

import React from 'react';
import TextInput from './TextInput';
import './profile.scss';

function StoreForm(props) {     
   
    return (
        <form onSubmit={props.onSubmit}>
            <div className="flex-row">
                <div className="space">
                    <div className="label-column">
                        <TextInput
                            id="storeName"
                            label="Nom de l'establiment*"
                            name="storeName"
                            value={props.dataStore.storeName}
                            onChange={props.onChange}
                            required
                        />
                    </div>

                    <div className="label-column">
                        <TextInput
                            id="storeImage"
                            label="Imatge de l'establiment (URL)*"
                            name="storeImage"
                            value={props.dataStore.storeImage}
                            onChange={props.onChange}
                            required
                        />
                    </div>

                    <div className="label-column">
                        <TextInput
                            id="web"
                            label="Pàgina web"
                            name="web"
                            value={props.dataStore.web}
                            onChange={props.onChange}
                        />
                    </div>

                    <div className="label-column">
                        <TextInput
                            id="identityName"
                            label="Raó social*"
                            name="identityName"
                            value={props.dataStore.identityName}
                            onChange={props.onChange}
                            required
                        />
                    </div>

                    <div className="label-column">
                        <TextInput
                            id="cif"
                            label="CIF*"
                            name="cif"
                            value={props.dataStore.cif}
                            onChange={props.onChange}
                            required
                        />
                    </div>
                </div>

                <div>
                    <div className="label-column">
                        <label>E-mail recepció comandes*</label>
                        <input
                            id="emailCompany"
                            name="emailCompany"
                            type="email"
                            value={props.dataStore.emailCompany}
                            onChange={props.onChange}
                            required
                        />
                    </div>

                    <div className="label-column">
                        <label>Telèfon de l'establiment*</label>
                        <input
                            id="phone"
                            name="phone"
                            value={props.dataStore.phone}
                            onChange={props.onChange}
                            required
                        />
                    </div>

                    <div className="label-column">
                        <TextInput
                            id="address"
                            label="Adreça*"
                            name="address"
                            value={props.dataStore.address}
                            onChange={props.onChange}
                            required
                        />
                    </div>

                    <div className="label-column">
                        <TextInput
                            id="city"
                            label="Ciutat*"
                            name="city"
                            value={props.dataStore.city}
                            onChange={props.onChange}
                            required
                        />
                    </div>

                    <div className="label-column">
                        <TextInput
                            id="postalCode"
                            label="Codi postal*"
                            name="postalCode"
                            value={props.dataStore.postalCode}
                            onChange={props.onChange}
                            required
                        />
                    </div>

                </div>
            </div>

            <div className="label-column horari">
                <TextInput
                    id="workingHours"
                    label="Horari*"
                    name="workingHours"
                    value={props.dataStore.workingHours}
                    onChange={props.onChange}
                    required
                />
            </div>

            <div className="label-column">
                <label>Descripció*</label>
                <textarea
                    id="descriptionStore"
                    type="textarea"
                    rows="10"
                    cols="40"
                    name="descriptionStore"
                    value={props.dataStore.descriptionStore}
                    onChange={props.onChange}
                    required
                />
            </div>

            <div className="label-column">
                <h3 className="type__title">Tipus*</h3>
                <select
                    className="type"
                    id="type"
                    name="type"
                    value={props.dataStore.type}
                    onChange={props.onChange}
                    required
                >
                    <option>Selecciona una opció</option>
                    <option>Alimentació</option>
                    <option>Restauració</option>
                    <option>Moda</option>
                    <option>Llar</option>
                    <option>Salut i bellesa</option>
                    <option>Lleure i cultura</option>
                    <option>Altres</option>
                </select>

            </div>

            <input
                type="submit"
                className="profile-button__yellow padding"
                value={props.updateForm ? "desa" : "crear botiga"}
            />
        </form>
    );
}

export default StoreForm;

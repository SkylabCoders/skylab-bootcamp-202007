import React from 'react';
import TextInput from './textInput';
import '../css/alertFormInputs.scss';

function AlertFormInputs(props) {
    return (
        <form onSubmit={props.onSubmit} className="alert__inputs__form">
            <div className="additional__section">
                <img
                    className="additional__section__img"
                    src="https://i.pinimg.com/564x/ed/a1/b6/eda1b604d8419a3b261e19c342f899dc.jpg"
                    alt="find banner"
                ></img>
                <div className="info__section">
                    <p>
                        Create your new alert!<br></br>
                        <br></br>
                        Fill all the fields as most exactly possible, and make
                        the best description you can of your lost pet. Think
                        that the small details makes the difference!!
                    </p>
                </div>
            </div>
            <div className="elements__section">
                <TextInput
                    label="Name"
                    name="name"
                    value={props.alertData.name}
                    onChange={props.onChange}
                    required
                />
                <TextInput
                    label="Image"
                    name="image"
                    value={props.alertData.image}
                    onChange={props.onChange}
                    required
                />
                <div className="classic__input__container">
                    <label className="form__label">
                        Type<br></br>
                    </label>
                    <select
                        className="form__input"
                        name="animal"
                        value={props.alertData.animals}
                        onChange={props.onChange}
                        required
                    >
                        <option value="">Select</option>
                        <option value="dog">Dog</option>
                        <option value="cat">Cat</option>
                        <option value="bird">Bird</option>
                        <option value="rabbit">Rabbit</option>
                        <option value="horse">Horse</option>
                        <option value="bird">Duck</option>
                        <option value="bird">Ferret</option>
                        <option value="bird">Rodents</option>
                        <option value="bird">Reptile</option>
                    </select>
                </div>
                <TextInput
                    label="Breed"
                    name="breed"
                    value={props.alertData.breed}
                    onChange={props.onChange}
                    required
                />
                <TextInput
                    label="Gender"
                    name="gender"
                    value={props.alertData.gender}
                    onChange={props.onChange}
                    required
                />
                <div className="classic__input__container">
                    <label className="form__label">
                        Weight<br></br>
                    </label>
                    <input
                        className="form__input"
                        type="number"
                        name="weight"
                        value={props.alertData.weight}
                        onChange={props.onChange}
                        required
                    />
                </div>
                <div className="classic__input__container">
                    <label className="form__label">
                        Date<br></br>
                    </label>
                    <input
                        className="form__input"
                        type="date"
                        name="date"
                        value={props.alertData.date}
                        onChange={props.onChange}
                        required
                    />
                </div>
                <TextInput
                    label="Description"
                    name="description"
                    value={props.alertData.description}
                    onChange={props.onChange}
                    required
                />
                <TextInput
                    label="Location"
                    name="location"
                    value={props.alertData.location}
                    onChange={props.onChange}
                    required
                />
                <TextInput
                    label="City"
                    name="city"
                    value={props.alertData.city}
                    onChange={props.onChange}
                    required
                />
                <div className="classic__input__container">
                    <input
                        type="submit"
                        className="form__button"
                        value="Create alert"
                    />
                </div>
            </div>
        </form>
    );
}

export default AlertFormInputs;

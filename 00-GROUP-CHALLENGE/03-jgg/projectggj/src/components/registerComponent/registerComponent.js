import React, { useState } from 'react';
import './registerComponent.scss';
import { sendAccountRegister } from '../../actions/authAction/authAction'
import { Link } from 'react-router-dom';

function RegisterComponent() {

    //We declare every variable of the value fields here
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [email, setEmail] = useState('');
    const [password1, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    function handleChange(event, setValueCallback) {
        event.preventDefault();
        setValueCallback(event.target.value);
    }



    return (
        <section className="text-center container">
            <form className="form-signin">
                <h1 className="m-2">Register</h1>

                <label>Name</label>
                <input value={name} onChange={(event) => handleChange(event, setName)} id="inputName" className="m-1 form-control" type="text" placeholder="Name" autoFocus="" required></input>
                <label>Last Name</label>
                <input value={lastName} onChange={(event) => handleChange(event, setLastName)} id="inputLastName" className="m-1 form-control" type="text" placeholder="Last Name" autoFocus="" required></input>
                <label>Birth Date</label>
                <input value={birthDate} onChange={(event) => handleChange(event, setBirthDate)} id="inputBirthDate" className="m-1 form-control" type="date" placeholder="Date" autoFocus="" required></input>
                <label>Email address</label>
                <input value={email} onChange={(event) => handleChange(event, setEmail)} id="inputEmail" className="m-1 form-control" type="email" placeholder="Email address" autoFocus="" required></input>
                <label>Password</label>
                <input value={password1} onChange={(event) => handleChange(event, setPassword)} id="inputPassword" className="m-1 form-control" type="password" placeholder="Password" minLength="5" maxLength="20" required></input>
                <label>Repite password</label>
                <input value={password2} onChange={(event) => handleChange(event, setPassword2)} id="inputPassword" className="m-1 form-control" type="password" placeholder="Password" minLength="5" maxLength="20" required></input>
                <div className="rowflex">
                    {password1 !== password2 && <button className="m-1 mt-3 mb-3 btn-light btn-lg btn-block" onClick={() => alert("Passwords don't match! Please enter the same password in both fields")}> Create account!</button>}
                    {password1 === password2 && <Link to="/login" className="m-1 mt-3 mb-3 btn-warning btn-lg btn-block" type="submit" onClick={() => sendAccountRegister(email, password1)}>Create account!</Link>}
                    <img className="capsule" src="https://i.pinimg.com/originals/c8/3e/92/c83e92534f8ce734d123c1445d1adf14.jpg" alt="capsule"></img>
                </div>
                <Link to="/login">Go back to login</Link>
            </form>
        </section >
    )
}

export default RegisterComponent;
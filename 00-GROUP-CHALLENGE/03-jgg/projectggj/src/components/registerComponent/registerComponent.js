import React, { useState, useEffect } from 'react';
import './registerComponent.css';
import { sendAccountRegister } from '../../actions/authAction/authAction'

function RegisterComponent(props) {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    /*     const [password2, setPassword] = useState('');
     */
    /*     useEffect(() => {
            function setPassword() {
                if (password1 !== password2) {
                    alert("Las contraseñas deben coincidir")
                }
            }
        }) */

    function handleChange(event, setValueCallback) {
        console.log(event.target.value)
        event.preventDefault();
        setValueCallback(event.target.value);
    }

    /*     const { ...profileInfo } = { name, lastName, birthDate, email, password1 };
     */


    return (
        <section className="text-center container">
            <form className="form-signin">
                <h1 className="m-2">Register</h1>

                <label>Name</label>
                <input value={name} onChange={(event) => handleChange(event, setName)} id="inputName" className="m-1 form-control" type="email" placeholder="Name" required="" autoFocus=""></input>
                <label>Last Name</label>
                <input value={lastName} onChange={(event) => handleChange(event, setLastName)} id="inputLastName" className="m-1 form-control" type="email" placeholder="Name" required="" autoFocus=""></input>
                <label>Birth Date</label>
                <input value={birthDate} onChange={(event) => handleChange(event, setBirthDate)} id="inputBirthDate" className="m-1 form-control" type="date" placeholder="Fecha" required="" autoFocus=""></input>
                <label>Email address</label>
                <input value={email} onChange={(event) => handleChange(event, setEmail)} id="inputEmail" className="m-1 form-control" type="email" placeholder="Email address" required="" autoFocus=""></input>
                <label>Password</label>
                {/*                 <input value={password1} onChange={(event) => handleChange(event, setPassword)} id="inputPassword" className="m-1 form-control" type="password" placeholder="Password" required="" minLength="5" maxLength="20" ></input>
                <label>Repite password</label> */}
                <input value={password} onChange={(event) => handleChange(event, setPassword)} id="inputPassword" className="m-1 form-control" type="password" placeholder="Password" required="" minLength="5" maxLength="20" ></input>
                <div className="rowflex">
                    <button className="m-1 mt-3 mb-3 btn-warning btn-lg btn-block" type="submit" onClick={() => sendAccountRegister(email, password)}>Create account!</button>
                    <img className="capsule" src="https://i.pinimg.com/originals/c8/3e/92/c83e92534f8ce734d123c1445d1adf14.jpg" alt="capsule"></img>
                </div>
            </form>
        </section >
    )
}

export default RegisterComponent;
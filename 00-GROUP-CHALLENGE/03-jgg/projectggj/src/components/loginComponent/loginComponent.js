import React, { useEffect, useState } from 'react';
import './loginComponent.css'
import { login, logout } from '../../actions/authAction/authAction'
import authStore from '../../stores/authStore'


function LoginComponent(props) {

    //const email = 'gemma-skylab@gmail.com';
    const password = '123456';

    const [isLogged, setIsLogged] = useState(authStore.isLogged());
    const [user, setUser] = useState(authStore.getUserProfile());
    const [email, setEmail] = useState();

    useEffect(() => {
        authStore.addChangeListener(onAuthChange);
    }, [isLogged]);

    function onAuthChange() {
        setIsLogged(authStore.isLogged());
        setUser(authStore.getUserProfile());
    }

    function handleChange(event, email, password) {
        console.log(email);
        console.log(user);
        event.preventDefault();
        setEmail(email);
        login(email, password);
       
      }

    return (
        <section className="text-center container">
            <form className="form-signin">
                <h1 className="m-2">Please sign in</h1>
                <label>Email address</label>
                <input id="inputEmail" onChange='' className="m-1 form-control" type="email" placeholder="Email address" required="" autoFocus=""></input>
                <label>Password</label>
                <input id="inputPassword" className="m-1 form-control" type="password" placeholder="Password" required=""></input>
                <button className="m-1 mt-3 mb-3 btn-warning btn-lg btn-block" type="submit" onClick={(event) => handleChange(event, email, password)}>Sign in</button>
                <button className="m-1 mt-3 mb-3 btn-warning btn-lg btn-block" type="submit"><a className="nav-link" href="/register">Register</a></button>
                {!isLogged && (
                    <button onClick={(event) => handleChange(event, email, password)}>Login</button>
                )}
                {isLogged && (
                    <>
                        <p>Welcome {user && user.email}!</p>
                        <button onClick={(event) => { event.preventDefault(); logout() }}>Logout</button>
                    </>
                )}
            </form>
        </section >
    )
}

export default LoginComponent;
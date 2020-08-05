import React, { useEffect } from 'react';
import './loginComponent.css'
import { Link } from 'react-router-dom';


function LoginComponent(props) {
    return (
        <section className="text-center container">
            <form className="form-signin">
                <h1 className="m-2">Please sign in</h1>
                <label>Email address</label>
                <input id="inputEmail" className="m-1 form-control" type="email" placeholder="Email address" required="" autoFocus=""></input>
                <label>Password</label>
                <input id="inputPassword" className="m-1 form-control" type="password" placeholder="Password" required=""></input>
                <button className="m-1 mt-3 mb-3 btn-warning btn-lg btn-block" type="submit">Sign in</button>
                <button className="m-1 mt-3 mb-3 btn-warning btn-lg btn-block" type="submit"><a className="nav-link" href="/register">Register</a></button>
            </form>
        </section >
    )
}

export default LoginComponent;
import React from 'react';
import './loginComponent.css'

function LoginComponent(props) {
    return (
        <section className="text-center container">
            <form className="form-signin">
                <h1 className="m-2">Please sign in</h1>
                <label>Email address</label>
                <input id="inputEmail" className="m-1 form-control" type="email" placeholder="Email address" required="" autofocus=""></input>
                <label>Password</label>
                <input id="inputPassword" className="m-1 form-control" type="password" placeholder="Password" required=""></input>
                <button className="m-1 mt-3 mb-3 btn-primary btn-lg btn-block" type="submit">Sign in</button>
            </form>
        </section >
    )
}

export default LoginComponent;
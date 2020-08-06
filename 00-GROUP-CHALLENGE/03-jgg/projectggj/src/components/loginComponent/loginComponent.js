import React, { useEffect, useState } from 'react';
import './loginComponent.css'
import { login, logout, loginWithGoogle } from '../../actions/authAction/authAction'
import authStore from '../../stores/authStore'


function LoginComponent(props) {


    const [isLogged, setIsLogged] = useState(authStore.isLogged());
    const [user, setUser] = useState(authStore.getUserProfile());
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        authStore.addChangeListener(onAuthChange);
        console.log(user);

        return () => authStore.removeChangeListener(onAuthChange);
    }, [isLogged, user, email]);

    function onAuthChange() {
        setIsLogged(authStore.isLogged());
        setUser(authStore.getUserProfile());
    }

    function handleChange(event, setValueCallback) {
        event.preventDefault();
        setValueCallback(event.target.value);
    }

    return (
        <section className="text-center container">
            <form className="form-signin">
                <h1 className="m-2">Please sign in</h1>
                <label>Email address</label>
                <input id="inputEmail" onChange={(event) => handleChange(event, setEmail)} value={email} className="m-1 form-control" type="email" placeholder="Email address" required="" autoFocus=""></input>
                <label>Password</label>
                <input id="inputPassword" onChange={(event) => handleChange(event, setPassword)} value={password} className="m-1 form-control" type="password" placeholder="Password" required=""></input>
                {!isLogged && (
                    <button className="m-1 mt-3 mb-3 btn-warning btn-lg btn-block" type="submit" onClick={(event) => { event.preventDefault(); login(email, password) }}>Login</button>
                )}
                <button className="m-1 mt-3 mb-3 btn-warning btn-lg btn-block" type="submit"><a className="nav-link" href="/register">Register</a></button>

                {isLogged && (
                    <>
                        <p>Welcome {user && user.email}!</p>
                        <button onClick={(event) => { event.preventDefault(); logout() }} className="m-1 mt-3 mb-3 btn-warning btn-lg btn-block">Logout</button>

                    </>
                )}
                <p>Or login with:</p>
                <div>
                    <img src="https://bookassist.org/wp-content/uploads/elementor/thumbs/google_3_520-oc7dqerwmsbfad0t1gveosa6x2uck2bd7y6l2r7txs.jpg" alt="google" onClick={(event) => { event.preventDefault(); loginWithGoogle() }}></img>
                </div>
            </form>
        </section >
    )
}

export default LoginComponent;
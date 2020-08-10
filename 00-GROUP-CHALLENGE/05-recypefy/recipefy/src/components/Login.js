import React, { useState, useEffect } from 'react';
import { login, logout, googleLogin, anonymousLogin, createUser } from "../actions/AuthActions";
import authStore from "../stores/AuthStore";
import './Login.scss';


function Login() {
    const [user, setUser] = useState(authStore.getUserProfile());
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showRegister, setRegister] = useState(false);
    const [showLogin, setLogForm] = useState(false);
    const [isLogged, setIsLogged] = useState(authStore.isLogged());


    useEffect(() => {
        authStore.addChangeListener(onAuthChange);

        return () => authStore.removeChangeListener(onAuthChange);
    }, [isLogged, user]);

    function onAuthChange() {
        setIsLogged(authStore.isLogged());
        setUser(authStore.getUserProfile());
    }

    function displayLogin() {
        if (!showLogin) {
            setLogForm(true);
        } else {
            setLogForm(false);
        }
    }

    function displayRegister() {
        if (!showRegister) {
            setRegister(true);
        } else {
            setRegister(false);
        }
    }

    function validateForm() {
        return email.length > 0 && password.length > 0
    }


    function validateRegister() {
        if (password === confirmPassword) {
            createUser(email, password);
            alert('You registered successfully!!')
        } else {
            alert('Both passwords has to match.')
        }
    }

    return (
        <div className="login__container">
            <div className="login__box">
                <img className="login__logo--size" src='https://image.flaticon.com/icons/svg/770/770906.svg' />
                <h2 className="login__title">Login with</h2>
                <form>

                    {showLogin && (<>
                        <label className='hide__element' for="email">Email</label><br />
                        <input autoFocus type="email" name="email" className="form__input hide__element" value={email} onChange={(e) => { setEmail(e.target.value) }} /><br />
                        <label className='hide__element' >Password</label><br />
                        <input type="password" className="form__input hide__element" value={password} onChange={e => setPassword(e.target.value)} /><br />


                        {!isLogged && (

                            <button className="login__button hide__element" disabled={!validateForm()} onClick={(event) => { event.preventDefault(); login(email, password) }}>Login</button>
                        )}
                    </>)}

                    {isLogged && (

                        <button className="login__button" onClick={(event) => { event.preventDefault(); logout() }}>Logout {(user && user.user.email) || "Anonymous"}</button>
                    )}

                </form>

                <a onClick={displayLogin}>EMAIL</a>
                <a onClick={googleLogin}>GOOGLE</a>
                <a onClick={anonymousLogin}>ANON</a>
                <h2 className="login__title">OR</h2>
                <a onClick={displayRegister}>REGISTER</a>

                {showRegister && (<>
                    <form className="register__form">

                        <label for="email">Email</label><br />
                        <input autoFocus type="email" name="email" className="form__input" value={email} onChange={(e) => { setEmail(e.target.value) }} /><br />
                        <label>Password</label><br />
                        <input type="password" className="form__input" value={password} onChange={e => setPassword(e.target.value)} /><br />
                        <label>Confirm Password</label><br />
                        <input type="password" className="form__input" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} /><br />

                        <button className="login__button" onClick={(event) => { event.preventDefault(); validateRegister() }}>Register</button>
                    </form>
                </>
                )}


            </div>
        </div>

    );
}

export default Login;
import React, { useState } from 'react';
import './Login.css';

function Login(){

    const[email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    function validateForm(){
        return email.length > 0 && password.length > 0
    }

    

    return(
        <div className="login__container">
            <div className="login__box">
                <form>
                    <label for="email">Email</label><br/>
                    <input autoFocus type="email" name="email" className="form__input" value={email} onChange={e => setEmail(e.target.value)}/><br/>
                    <label>Password</label><br/>
                    <input type="password" className="form__input" value={password} onChange={e => setPassword(e.target.value)}/>
                </form>
                <button type="submit" className="login__button" disabled={!validateForm()}>Login</button>
                <p>or</p>
                <h2>REGISTER</h2>
                <a>GOOGLE</a>
                <a>EMAIL</a>
                <a>GUEST</a>
            </div>
        </div>

    );
}

export default Login;
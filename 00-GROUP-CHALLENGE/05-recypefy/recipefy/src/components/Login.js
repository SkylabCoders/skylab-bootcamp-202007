import React, { useState, useEffect } from 'react';
import { login, logout, googleLogin } from "../actions/AuthActions";
import authStore from "../stores/AuthStore";
import './Login.css';


function Login(){
   
    const [user, setUser] = useState(authStore.getUserProfile());
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    // function validateForm(){ 
    //     return email.length > 0 && password.length > 0
    // }
    

    const [isLogged, setIsLogged] = useState(authStore.isLogged())

    useEffect(()=> {
        authStore.addChangeListener(onAuthChange);
       
        return () => authStore.removeChangeListener(onAuthChange);
    }, [isLogged, user]);

    function onAuthChange(){
        setIsLogged(authStore.isLogged());
        setUser(authStore.getUserProfile());
    }

    

    return(
        <div className="login__container">
            <div className="login__box">
                <form>
                    <label for="email">Email</label><br/>
                    <input autoFocus type="email" name="email" className="form__input" value={email} onChange={(e) => { setEmail(e.target.value); console.log(email)}}/><br/>
                    <label>Password</label><br/>
                    <input type="password" className="form__input" value={password} onChange={e => setPassword(e.target.value)}/><br/>
                
                    {!isLogged &&(
                        
                        <button onClick={(event) => { event.preventDefault(); login(email, password)}}>Login</button>
                        )}
                    
                    {isLogged && (
                   
                    <button onClick = {(event) => { event.preventDefault();logout()}}>Logout {user && user.user.email}</button>
                    )}

                </form>
                

                <p>or</p>
                <h2>REGISTER</h2>
                <a onClick={googleLogin}>GOOGLE</a>
                <a>EMAIL</a>
                <a>GUEST</a>
            </div>
        </div>

    );
}

export default Login;
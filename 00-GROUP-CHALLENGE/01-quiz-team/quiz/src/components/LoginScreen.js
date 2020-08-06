import React, { useState, useEffect} from "react";
import './../css/LoginScreen.css';
import {login, logout} from './../actions/authActions'
import authStore from './../stores/authStore'

function Login() {
    const email = 'pepe@gmail.com';
    const password = '123456';
    const [isLogged, setIsLogged] = useState(authStore.isLogged());
    const [user, setUser] = useState(authStore.getUserProfile());
    useEffect(() => {
        authStore.addChangeListener(onAuthChange);
    }, [isLogged]);
    function onAuthChange() {
        setIsLogged(authStore.isLogged());
        setUser(authStore.getUserProfile());
    }
    return (
        <>
            {!isLogged && <button onClick={() => login(email, password)}>Login</button>}
            {isLogged && (
                <>
                    <p>Welcome {user && user.email}!</p>
                    <button onClick={() => logout()}>Logout</button>
                </>
            )}
        </>
    );
}
export default Login;
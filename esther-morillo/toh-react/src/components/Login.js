import React, { useState, useEffect } from 'react'
// Después de crear el componente hay que añadir las autentificaciones
import { login, logout } from '../actions/authActions.js'
import authStore from '../stores/authStore.js';



function Login() {
    const email = 'esther.morillo@gmail.com';
    const password = '123456';

    const [isLogged, setIsLogged] = useState(authStore.isLogged());
    const [user, setUser] = useState(authStore.getUserProfile());

    useEffect(() => {
        authStore.addChangeListener(onAuthChange);
        
        return () => {
            authStore.removeChangeListener(onAuthChange)
        }
    }, [isLogged, user]);

    function onAuthChange() {
        setIsLogged(authStore.isLogged());
        setUser(authStore.getUserProfile());
    }

    return (
        <>
            {!isLogged && (
                <button onClick={() => login(email, password)}>Login</button>
            )}
            {isLogged && (
                <>
                    <p>Welcome: {user && user.email}!</p>
                    <button onClick={() => logout()}>Logout</button>
                </>
            )}  
        </>
    );
}

export default Login;
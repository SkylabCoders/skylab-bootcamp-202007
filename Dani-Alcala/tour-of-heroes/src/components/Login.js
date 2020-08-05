import React, { useState, useEffect } from 'react'
import { login, logout } from '../actions/authActions'
import authStore from '../stores/authStore'


function Login() {
    const email = 'daniamcode@gmail.com'
    const password = '123456'

    const[isLogged, setIsLogged] = useState(authStore.isLogged())
    const [user, setUser] = useState(authStore.getUserProfile())

    useEffect(() => {
        authStore.addChangeListener(onAuthChange)
        
        return () => authStore.removeChangeListener(onAuthChange)
    }, [isLogged, user])

    function onAuthChange() {
        setIsLogged(authStore.isLogged())
        setUser(authStore.getUserProfile())
    }

    return (
		<>
        {!isLogged && (
			<button onClick={() => login(email, password)}>Login</button>
        )}
        {isLogged && 
            <button onClick={() =>logout()}>Logout</button>}
            <img src={user && user.photoURL} />
            <p>{user && user.email}</p>
		</>
	);
}

export default Login
import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import './../css/LoginScreen.css';
import { login, logout } from './../actions/authActions';
import authStore from './../stores/authStore';

function LoginScreen() {
    const [userName,setUserName] = useState('');
    const [userPassword,setUserPassword] = useState(undefined);
    const [isLogged, setIsLogged] = useState(authStore.isLogged());
    const [user, setUser] = useState(authStore.getUserProfile());

    const email = 'me@test.mail';
    const password = 'abc123';

    useEffect(()=>{
        authStore.addChangeListener(onAuthChange);
        return ()=>{authStore.removeChangeListener(onAuthChange)}
    }, [isLogged, user]);

    function onAuthChange(){
        setIsLogged(authStore.isLogged());
        setUser(authStore.getUserProfile());
    }

    function onFieldChange(value,setValue){
        setValue(value);
    }
   
    return (
        <>
            <NavLink to={`/login`} >
                <div className="login__wrapper">
                    <div className="login__left__container">
                        <img src="https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?cs=srgb&dl=pexels-johannes-plenio-1103970.jpg&fm=jpg"></img>
                    </div>
                    <div className="login__right__container">
                        <div className="login">
                            <h1>Login</h1>
                            <form method="post" action="">
                                <p><input type="text" name="userName" value={userName} placeholder="Username or Email" onChange={(event) => onFieldChange(event.target.value, setUserName)}/></p>
                                <p><input type="password" name="password" value={userPassword} placeholder="Password" onChange={(event) => onFieldChange(event.target.value, setUserPassword)}/></p>  
                                    <input type="submit" name="login" value="Login" />
                                    <input type="submit" name="logout" value="Logout" />
                                    {!isLogged && (<button onClick={(event) => {
                                        event.preventDefault();
                                        login(email, password)}}>Login</button>)}
                                    {isLogged && (<button onClick={() => logout()}>Logout {user.email}</button>)}
                            </form>
                        </div>
                    </div>
                </div>
            </NavLink>
        </>
    )
}

export default LoginScreen;
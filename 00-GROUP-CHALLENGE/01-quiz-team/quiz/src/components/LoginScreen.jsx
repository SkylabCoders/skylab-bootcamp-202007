import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import './../css/loginScreen.scss';
import { login, logout, loginGoogle } from './../actions/authActions';
import authStore from './../stores/authStore';
import * as ROUTES from './../config/routes';
import * as MOCKUSER from '../mockdata/USER';

function LoginScreen() {
    const [userName,setUserName] = useState('');
    const [userPassword,setUserPassword] = useState(undefined);
    const [isLogged, setIsLogged] = useState(authStore.isLogged());
    const [user, setUser] = useState(authStore.getUserProfile());

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
            <NavLink to={ROUTES.LOGIN} >
                <div className="login__wrapper">
                    <div className="login__left__container">
                        <img src="https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?cs=srgb&dl=pexels-johannes-plenio-1103970.jpg&fm=jpg"></img>
                    </div>
                    <div className="login__right__container">
                        <div className="login">
                            <h1>Login</h1>
                            <form method="post" action="">
                                <input className="input__item" type="text" name="userName" value={userName} placeholder="Username or Email" onChange={(event) => onFieldChange(event.target.value, setUserName)}/>
                                <input className="input__item" type="password" name="password" value={userPassword} placeholder="Password" onChange={(event) => onFieldChange(event.target.value, setUserPassword)}/>
                                    <input className='input__item notDisplayed' type="submit" name="login" value="Login" />
                                    <input className='input__item notDisplayed' type="submit" name="logout" value="Logout" />
                                    <div className="login__set">
                                    {!isLogged && (<button onClick={(event) => {
                                        event.preventDefault();
                                        login(MOCKUSER.email, MOCKUSER.password)}}>Login</button>)}
                                    {!isLogged && (<button onClick={(event) => {
                                        event.preventDefault();
                                        loginGoogle()}}>Sign in with google</button>)}
                                    {isLogged && (<button onClick={() => logout()}>Logout {user.email}</button>)}
                                    </div>
                            </form>
                        </div>
                    </div>
                </div>
            </NavLink>
        </>
    );
}
export default LoginScreen;
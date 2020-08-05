import React, { useState, useEffect} from "react";
import { NavLink } from 'react-router-dom';
import './../css/LoginScreen.css'

function LoginScreen(props) {
    const [userName,setUserName] = useState('');
    const [userPassword,setUserPassword] = useState(null);

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
                                <p class="submit"><input type="submit" name="commit" value="Login" /></p>
                            </form>
                        </div>
                    </div>
                </div>
            </NavLink>
        </>
    )
}

export default LoginScreen;
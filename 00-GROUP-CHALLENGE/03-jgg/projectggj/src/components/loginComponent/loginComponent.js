import React, { useEffect, useState } from 'react';
import './loginComponent.css'
import { login, logout, loginWithGoogle } from '../../actions/authAction/authAction'
import authStore from '../../stores/authStore'
import { Link } from 'react-router-dom';


function LoginComponent(props) {

    //isLogged is a variable that controls when is logged a user and we display one button or other depending on his state
    //Declaration of every variable
    const [isLogged, setIsLogged] = useState(authStore.isLogged());
    const [isLoggedWithGoogle, setIsLoogedWithGoogle] = useState(authStore.isLogged());
    const [user, setUser] = useState(authStore.getUserProfile());
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState(authStore.getUserName());
    const [userPhoto, setUserPhoto] = useState(authStore.getUserPhoto());

    useEffect(() => {
        authStore.addChangeListener(onAuthChange);

        return () => authStore.removeChangeListener(onAuthChange);
    }, [isLogged, user, email, isLoggedWithGoogle, userPhoto]);

    //Is activated in ChangeListener and controls the flux of the log
    function onAuthChange() {
        setIsLogged(authStore.isLogged());
        setIsLoogedWithGoogle(authStore.isLogged());
        setUser(authStore.getUserProfile());
        setUserName(authStore.getUserName());
        setUserPhoto(authStore.getUserPhoto());
    }

    function handleChange(event, setValueCallback) {
        event.preventDefault();
        setValueCallback(event.target.value);
    }

    return (
        <section className="text-center container containerLogin">
            <form className="form-signin">
                {!isLogged && (
                    <>
                        <h1 className="m-2">Please sign in</h1>

                        <label>Email address</label>
                        <input id="inputEmail" onChange={(event) => handleChange(event, setEmail)} value={email} className="m-1 form-control" type="email" placeholder="Email address" required="" autoFocus=""></input>
                        <label>Password</label>
                        <input id="inputPassword" onChange={(event) => handleChange(event, setPassword)} value={password} className="m-1 form-control" type="password" placeholder="Password" required=""></input>

                        <button className="m-1 mt-3 mb-3 btn-warning btn-lg btn-block" type="submit" onClick={(event) => { event.preventDefault(); login(email, password) }}>Login</button>
                        <button className="m-1 mt-3 mb-3 btn-warning btn-lg btn-block" type="submit"><a className="nav-link" href="/register">Register</a></button>
                    </>
                )}
                {isLogged && (
                    <>
                        <h1>You are logged!</h1>
                        <h2>Welcome {user && (email || userName)}!</h2>
                        {userPhoto &&
                            <img src={userPhoto} alt="user logo"></img>
                        }
                        {!userPhoto &&
                            <img src="https://w7.pngwing.com/pngs/304/275/png-transparent-user-profile-computer-icons-profile-miscellaneous-logo-monochrome.png" alt="user profile"></img>
                        }
                        <button onClick={(event) => { event.preventDefault(); logout() }} className="m-1 mt-3 mb-3 btn-warning btn-lg btn-block">Logout</button>
                        <Link to="/">Click here to go home</Link>
                        <Link to="/profile">Or click here to go to your profile</Link>
                    </>
                )}
                <div>
                    {!isLoggedWithGoogle && (
                        <div>
                            <p>Or login with:</p>
                            <img src="https://bookassist.org/wp-content/uploads/elementor/thumbs/google_3_520-oc7dqerwmsbfad0t1gveosa6x2uck2bd7y6l2r7txs.jpg" alt="google" onClick={(event) => { event.preventDefault(); loginWithGoogle() }}></img>
                        </div>
                    )}
                </div>
            </form>
        </section >
    )
}

export default LoginComponent;
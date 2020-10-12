import React, {useEffect, useState} from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import '../css/profile.scss';
import { createUser, loadUser,updateUser } from '../actions/user.actions';
import userStore from '../stores/userStore';

const Profile = () => {
    const { user, isAuthenticated, isLoading} = useAuth0();
    const { logout } = useAuth0();
    const [name,setName]=useState('');
    const [lastName,setLastName]=useState('');
    const [address,setAddress]=useState('');
    const [email,setEmail]=useState('');
    const [phone,setPhone]=useState('');
    const [city,setCity]=useState('');
    const [userLoaded, setUserLoaded] = useState(userStore.getUser());
    const [updateDesplegable,setUpdateDesplegable]=useState(false);

 	useEffect(() => {
        userStore.addChangeListener(onChange);

        if (isAuthenticated && !userLoaded) {
                loadUser(user.sub);
                setUserLoaded(userStore.getUser());
        }

		return () => userStore.removeChangeListener(onChange);
	}, [userLoaded, isAuthenticated, user?.sub]);

	function onChange() {
        setUserLoaded(userStore.getUser()); 
    }

    function onCreate(event, name, lastName,address,email,phone,city,user) {
		event.preventDefault();
        createUser(name,lastName, address,email,phone,city,user);
    }

    function onUpdate(event,name,lastname,address,email,phone,city,userLoaded) {
		event.preventDefault();
        updateUser(name,lastname,address,email,phone,city,userLoaded);
    }

    function desplegar(event,updateDesplegable){
        event.preventDefault();

        if(!updateDesplegable){
            setUpdateDesplegable(true);
        }else{
            setUpdateDesplegable(false);
        }
       return ;
    }

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return (
        <>
       {isAuthenticated && (
            <div className="profile__container">
                <div className="profile__wrapper">
                    <div>
                        <h1>Welcome {user?.nickname}!!</h1>
                    </div>
                    <div className="login-wrap">
                        <form className="profile__form" name="profile__form">
                            <div className="input__section">
                                <div className="info__title">
                                    <label>USER</label>
                                </div>
                                <p className="label">User:</p>
                                <p className="filled">{user.email}</p>
                            </div>

                            
                            
                            <div className="input__section">
                            {userLoaded && (
                                    <>
                                    <div className="form__container">
                                    <div className="input__section">
                                        <p className="label">Name:</p>
                                        <p className="filled" >{userLoaded.name}</p>
                                        <p className="label" >Last name:</p>
                                        <p className="filled" >{userLoaded.lastname}</p>
                                        <p className="label">Address:</p>
                                        <p className="filled" >{userLoaded.address}</p>
                                        <p className="label">Email:</p>
                                        <p className="filled" >{userLoaded.email}</p>
                                        <p className="label">Phone:</p>
                                        <p className="filled" >{userLoaded.phone}</p>
                                        <p className="label">City:</p>
                                        <p className="filled" >{userLoaded.city}</p>
                                    </div>
                                    </div>
                                    </>



                            )}
                            <div className="button__container">
                                    <button className="button" type="submit" onClick={(event) => desplegar(event,updateDesplegable)}>Show form</button>
                            </div>
                            {updateDesplegable && (
                                <>
                                <div className="info__title">
                                    <label>UPDATE YOUR PERSONAL INFO</label>
                                </div>
                                <div className="form__container">
                                <div className="input__section">
                                <p className="label">Name</p>
                                <input className="input" type="text" value={name} placeholder="insert name" name="name" onChange={(event) => setName(event.target.value)} />
                                <p className="label" >Last name</p>
                                <input className="input" type="text" value={lastName} placeholder="insert last name" name="lastname" onChange={(event) => setLastName(event.target.value)} />
                                <p className="label">Address</p>
                                <input className="input" type="text" value={address} placeholder="insert address" name="address" onChange={(event) => setAddress(event.target.value)} />
                                <p className="label">Email</p>
                                <input className="input" type="email" value={email} placeholder="insert email" name="email" onChange={(event) => setEmail(event.target.value)} />
                                <p className="label">Phone</p>
                                <input className="input" type="number" value={phone} placeholder="insert phone" name="phone" onChange={(event) => setPhone(event.target.value)} />
                                <p className="label">City</p>
                                <input className="input" type="text" value={city} placeholder="insert city" name="city" onChange={(event) => setCity(event.target.value)} />                    
                                </div>
                                </div>
                                {!userLoaded && (
                                    <div className="button__container">
                                    <button className="button" type="submit" onClick={(event) => onCreate(event, name,lastName,address,email,phone,city,user)}>Save</button>
                                    </div>
                                )}

                                {userLoaded && (
                                
                                <div className="button__container">
                                <button className="button" type="submit" onClick={(event) => onUpdate(event, name,lastName,address,email,phone,city,userLoaded._id)}>Save</button>
                                </div>
                                )}
                                </>
                            )}

                            </div>
                        </form>
                    </div>
                </div>
        </div>
        )}

            <div className="button__container">
                <button className="button" onClick={() =>logout({ returnTo: 'http://localhost:3000/'})}>Logout</button>
            </div>
    </>
    );
};

export default Profile;

import React, { useState, useEffect } from 'react';
import { loadUserBySub, addProductCart } from '../actions/userActions';
import userStore from '../stores/userStore';
import { useAuth0 } from '@auth0/auth0-react';
import './buttonYellow.scss';

const ButtonYellow = ({ product }) => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const [userMongo, setUserMongo] = useState();
    const [tooggle, setTooggle] = useState(false);

    async function onSubmit() {
        (async function updateUser(){
            await loadUserBySub(userMongo?.sub);
            setUserMongo(userStore.getUser())
        }());
        
        if(userMongo && userMongo.cart) {
            const tooggleButton = userMongo?.cart.some((element) => element === product);
        }

        setTooggle(tooggle);
        
        addProductCart(userMongo?.sub, product);
    }

    useEffect(() => {
        userStore.addChangeListener(onChange);

        if (isAuthenticated && !userMongo) {
            (async function asyncLoad() {
                await loadUserBySub(user.sub);
                setUserMongo(userStore.getUser());
            })();
        }
    
        return () => userStore.removeChangeListener(onChange);
    });

    function onChange() {
        setUserMongo(userStore.getUser());
    }

    return (
        <>
            <div className="button-add__bck">           
                <button 
                className="button-add__yellow"
                onClick={(event) => {
                    event.preventDefault();
                    onSubmit(userMongo, product)} 
                }
                >
                    afegeix
                </button>
            </div>
        </>
    );
};

export default ButtonYellow;

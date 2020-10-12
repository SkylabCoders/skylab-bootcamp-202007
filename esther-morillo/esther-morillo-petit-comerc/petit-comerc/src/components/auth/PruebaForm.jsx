import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { registerStore, deleteStore, updateStore } from '../../actions/storeActions';
import { loadUserBySub } from '../../actions/userActions';
import StoreForm from './StoreForm';
import StoreFormUpdate from './StoreFormUpdate';
import HeaderLogin from '../HeaderLogin';
import FooterMobile from '../FooterMobile';
import userStore from '../../stores/userStore';

const RegisterStore = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const [userMongo, setUserMongo] = useState();
    const [updateForm, setUpdateForm] = useState(false);  
  
    const [dataStore, setDataStore] = useState({
        storeId: '',
        ownerId: '',
        storeName: '',
        storeImage: '',
        web: '',
        identityName: '',
        cif: '',
        emailCompany: '',
        phone: '',
        address: '',
        city: '',
        postalCode: '',
        location: '',
        workingHours: '',
        descriptionStore: '',
        type: '',
        categories: [],
        products: [],
        status: true
    });

    const [storeUser, setStoreUser] = useState({
        storeId: userMongo?.store[0].storeId,
        ownerId: userMongo?.store[0].ownerId,
        storeName: userMongo?.store[0].storeName,
        storeImage: userMongo?.store[0].storeImage,
        web: userMongo?.store[0].web,
        identityName: userMongo?.store[0].identityName,
        cif: userMongo?.store[0].cif,
        emailCompany: userMongo?.store[0].emailCompany,
        phone: userMongo?.store[0].phone,
        address: userMongo?.store[0].address,
        city: userMongo?.store[0].city,
        postalCode: userMongo?.store[0].postalCode,
        location: userMongo?.store[0].location,
        workingHours: userMongo?.store[0].workingHours,
        descriptionStore: userMongo?.store[0].descriptionStore,
        type: userMongo?.store[0].type,
        categories: [],
        products: [],
        status: true
    });

    if (isLoading) {
        return <img className="loading" src={loading} alt="loading..." />
    }

        

   /*  (async function lolo () {
        const x = await userMongo?.store[0];
        const y = await x?.storeName;
        console.log('nombre', y)
    }()); */


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
        setStoreUser(userStore.getUser())
    }

    const handleChange = ({ target }) => {               
        setDataStore({
            ...dataStore,
            ownerId: userMongo?._id,
            storeId: userMongo ? userMongo.store[0] : '',
            [target.name]: target.value
        });

        setStoreUser({
            ...storeUser,
            [target.name]: target.value
        });
    };

    

    const handleSubmit = () => {   
        if(!updateForm) {
            registerStore(dataStore);
        } 
        if(updateForm) {
            updateStore(dataStore)
        }      
    };

    function onDelete(event, storeId) {
        event.preventDefault();
        deleteStore(storeId);
    }

    function onUpdateForm(event, updateForm) {
        event.preventDefault();

        if (!updateForm) {
            setUpdateForm(true);
        } else {
            setUpdateForm(false);
        }
    }
    
    return (
        <>
            <HeaderLogin />
            {isAuthenticated && (
                <section className="profile-contain">
                    <div className="profile-menu">
                        <div className="profile-menu__column">
                            <div className="profile-menu__user">
                                <img
                                    className="profile-menu__image"
                                    src={user.picture}
                                    alt={user.name || user.email}
                                />
                                <h3 className="profile-menu__text">
                                    {user.name}
                                </h3>
                            </div>

                            <Link to="/auth/store" className="profile-menu__btn active">
                                La meva botiga
                            </Link>

                            <Link
                                to="/auth/products"
                                className="profile-menu__btn"
                            >
                                Productes
                            </Link>
                        </div>
                    </div>

                    {!userMongo?.owner && (
                        <div className="profile-settings">
                            <div className="profile__title">
                                <h3>Formulari de Establiment</h3>
                            </div>
                            <StoreForm
                                dataStore={dataStore}
                                onChange={handleChange}
                                onSubmit={handleSubmit}                     
                            />
                        </div>
                    )}

                    {updateForm && (
                        <div className="profile-settings">
                            <div className="profile__title">
                                <h3>Formulari de Establiment</h3>
                            </div>
                            <StoreFormUpdate
                                storeUser={storeUser, setStoreUser}
                                onChange={handleChange}
                                onSubmit={handleSubmit}
                            />
                        </div>
                    )}

                    {userMongo?.owner && (
                        <div className="profile-settings">
                            {!updateForm && (
                                <>
                                    <h3 className="profile-settings__title">
                                        Què vols fer?
                                    </h3>
                                    <div
                                        className="profile-button__yellow"
                                        onClick={(event) =>
                                            onUpdateForm(event, updateForm)
                                        }
                                    >
                                        edita botiga
                                    </div>

                                    <div
                                        className="profile-button__yellow black"
                                        onClick={(event) =>
                                            onDelete(event, userMongo?.store[0])
                                        }
                                    >
                                        elimina botiga
                                    </div>
                                </>
                            )}
                        </div>
                    )}
                </section>
            )}
            <FooterMobile />
        </>
    );
};

export default RegisterStore;

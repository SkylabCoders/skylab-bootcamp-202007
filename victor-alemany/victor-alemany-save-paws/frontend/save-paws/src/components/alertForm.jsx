import React, {useEffect, useState} from 'react';
import '../css/alertForm.scss';
import { createAlert } from '../actions/alert.actions';
import { loadUser } from '../actions/user.actions';
import userStore from '../stores/userStore';
import { useAuth0 } from '@auth0/auth0-react';
import AlertFormInputs from './alertFormInputs';
import API_KEY from '../config/google_maps_config';
import Geocode from 'react-geocode';

const AlertForm = () => {
    const { user } = useAuth0();
    const [userLoaded, setUserLoaded] = useState(userStore.getUser());
    let [coordenates,setCoordenates]=useState('');

     const [alertData, setAlertData]= useState({
         name: '',
         image: '',
         animal: '',
         breed:'',
         gender: '',
         weight:'',
         date: '',
         description: '',
         location: '',
         city: ''
     })  

    useEffect(() => {
        userStore.addChangeListener(onChange);
        if(!userLoaded)loadUser(user.sub);

		return () => userStore.removeChangeListener(onChange);
	},[ [user,userLoaded]]);

	function onChange() {
        setUserLoaded(userStore.getUser()); 
    } 

    Geocode.setApiKey(API_KEY);
    Geocode.setLanguage('es');
    Geocode.setRegion('es');

    function handleChange ({target}){
        setAlertData({
            ...alertData,
            created:userLoaded._id,
            followed:[],
	        comments:'',
            active:true,
            [target.name]:target.value,
            coordenates
        })
        if(alertData.location)
        loadCoodernates(alertData.location);

    }

    function handleSubmit (event){
        event.preventDefault();
        createAlert(alertData);
    }
    
    async function loadCoodernates(location){
       await Geocode.fromAddress(location).then(
            response => {
              const { lat, lng } = response.results[0].geometry.location;
            setCoordenates(coordenates = [lat,lng]);
            },
            error => {
              console.error(error);
            }
          );
    }

    return (
    <>      
        <div className="alertForm__container">
                <AlertFormInputs alertData={alertData} onChange={handleChange} onSubmit={handleSubmit} />
        </div>
    </>
    );
};

export default AlertForm;
import React, { useState, useEffect } from "react";
import alertStore from "../stores/alertStore";
import "../css/userAlerts.scss";
import { loadAlerts } from "../actions/alert.actions";
import UserCreated from "./userCreated";
import UserFollow from "./userFollow";

function UserAlerts(props) {
  const [alertsByUser, setAlertsByUser] = useState(alertStore.getAlertsFilteredByUser(props.match.params.userId));
  const [alertsByFollow, setAlertsByFollow] = useState(alertStore.getAlertsFilteredByFollow(props.match.params?.userId));
  let [alerts, setAlerts] = useState('');

  useEffect(() => {
    alertStore.addChangeListener(onChange);

    if(alerts.length === 0)loadAlerts();
    else if(alerts)alertStore.getAlerts();
    else if(alertsByFollow.length === 0 || alertsByUser.length === 0){
      alertStore.getAlertsFilteredByUser(props.match.params.userId)
      alertStore.getAlertsFilteredByFollow(props.match.params.userId)
    }
    
    return () => {
      alertStore.removeChangeListener(onChange);
    }
  }, [alerts,alertsByUser.length,alertsByFollow.length,props.match.params.userId]);

  function onChange() {
    setAlerts(alertStore.getAlerts());
    setAlertsByUser(alertStore.getAlertsFilteredByUser(props.match.params.userId))
    setAlertsByFollow(alertStore.getAlertsFilteredByFollow(props.match.params.userId))
  } 
   return (
    <>
      <div className="user__main__container">
         <UserCreated alertsByUser = {alertsByUser}/>
         <UserFollow alertsByFollow = {alertsByFollow}/>
      </div> 
   </>
  ); 
}

export default UserAlerts;
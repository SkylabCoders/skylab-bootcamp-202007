import React, { useState, useEffect } from "react";
import { Link} from "react-router-dom";
import alertStore from "../stores/alertStore";
import { loadAlerts } from "../actions/alert.actions";
import "../css/alertList.scss";

function AlertList() {
  const [alerts, setAlerts] = useState('');

  useEffect(() => {
    alertStore.addChangeListener(onChange);
    if (alerts.length === 0) loadAlerts();
    return () => alertStore.removeChangeListener(onChange);
  }, [alerts,alerts.length]);

  function onChange() {
    setAlerts(alertStore.getAlertsFiltered());
  }

  return (
    <div className="container">
      <div className="main__list__info">
        <div className="banner__container">
          <h2>Lost animal list</h2>
          <img src="https://i.pinimg.com/564x/2c/72/f5/2c72f5115d9af40b1bf5e2226944ad65.jpg" alt="header logo"></img>
        </div>
        
        <p>Following you have the complete list of the alerts published by users. 
          If you want to know more details about the alerts, select one and you could see 
          the main information about it, such as the location or others.
        </p>
      </div>
      {alerts.length !== 0 ? (
      <ul className="list__container">
        {alerts.map((alert) => (
          <li key={alert._id} className="alert-list__item">
            <Link to={`/alerts/${alert._id}`}>
              <img
                className="list__image"
                src={alert.image}
                alt="list animal"
              />
              <div className="alert__title__container"><p className="alert__title">{alert.city}</p></div>
            </Link>
          </li>
        ))}
      </ul>) : (<div><p>Sorry!! No alerts exists!!</p></div> )}
    </div>
  );
}

export default AlertList;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import alertStore from "../stores/alertStore";
import "../css/alertsFiltered.scss";
import { loadAlerts } from "../actions/alert.actions";

function AlertsFiltered(props) {
  const [alertsByCategories, setAlertsByCategories] = useState('');
  const [category] = useState(props?.match?.params?.category);
  const [alerts, setAlerts] = useState(alertStore?.getAlertsFiltered());

  useEffect(() => {
    alertStore.addChangeListener(onChange);
    if (alerts?.length === 0) loadAlerts();
    else if(alerts)setAlertsByCategories(alertStore?.getAlertsByCategories(category));
    return () => alertStore?.removeChangeListener(onChange);
  }, [alerts.length,alerts,category]);

  function onChange() {
    setAlertsByCategories(alertStore?.getAlertsByCategories(category)); 
    setAlerts(alertStore.getAlertsFiltered());
  } 

   return (
    alertsByCategories && (
     <div className="container">
       <div className="banner__container">
          <h2>{category} list</h2>
          <img src="https://i.pinimg.com/564x/16/13/d8/1613d8490e6aef2a726f97f58f79d32a.jpg" alt="header logo"></img>
        </div>
       <ul className="list__container">
        {alertsByCategories?.map((alert) => (
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
      </ul>
    </div>)
  ); 
}

export default AlertsFiltered;

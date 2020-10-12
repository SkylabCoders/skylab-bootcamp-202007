import React, { useState, useEffect } from "react";
import './EventFormComponent.scss';
import CreateEventForm from "../forms-material-UI-components/CreateEventFormComponent"

function EventForm() {

  return(
      <>
        <header className="banner__container">
          <img src="https://www.coe.int/documents/24916852/0/Supporters3.jpg/63b405d6-be6d-d2ec-bd11-0f03c6ca8130?t=1503553460000" alt="" />
          <div className="banner__container-title">
            <h1>CREATE EVENT</h1>
          </div>
        </header>

        <div className="event-form__container">
            <h2>Please, complete all fields to create the event* </h2>
            <CreateEventForm />
        </div>

       
      </>
  )
}

export default EventForm;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import eventStore from "../../stores/EventsStore";
import "./EventItemComponent.scss";

function EventItem({ id }) {
  const [events, setEvents] = useState(eventStore.getEvents());
  const [actualEventPhoto, setActualEventPhoto] = useState("");
  const [actualEventTitle, setActualEventTitle] = useState("");
  const [actualEventStartTime, setActualEventStartTime] = useState("");
  const [actualEventDate, setActualEventDate] = useState("");
  const [actualEventParticipants, setActualEventParticipants] = useState("");
  //   const [actualEventId, setActualEventId] = useState('');

  useEffect(() => {
    eventStore.addChangeListener(onChange);
    if (events.length === 0) {
      eventStore.getEvents();
    } else {
      const actualEvent = eventStore.getEventById(id);
      if (actualEvent) {
        setActualEventPhoto(actualEvent.photo);
        setActualEventTitle(actualEvent.title);
        setActualEventStartTime(actualEvent.start);
        setActualEventDate(actualEvent.date);
        setActualEventParticipants(actualEvent.participants.length);
        // setActualEventId(actualEvent._id);
      }
    }
    return () => {
      eventStore.removeChangeListener(onChange);
    };
  }, [events.length]);

  function onChange() {
    setEvents(eventStore.getEvents());
  }

  return (
    <div className="event-card__container">
      <div className="event-card__photo">
        <img src={actualEventPhoto} alt="Photo" />
      </div>
      <div className="details__container">
        <div className="details-title">
          <h2>{actualEventTitle}</h2>
        </div>
        <div className="details__info">
          <div className="details__left">
            <div className="info-start">
              <img

                src="https://image.flaticon.com/icons/svg/1505/1505471.svg"
                alt="start-flag"
              />
              <div>
                <p>Start</p>
                <div className="start-time"><p className="variable">{actualEventStartTime}</p></div>
              </div>
            </div>
            <Link to={`/events/${id}`} className="details-button">
              Details
            </Link>
          </div>
          <div className="details__right">
            <div className="info-date">
                <img src="https://image.flaticon.com/icons/svg/3445/3445710.svg" alt="date" />
                <div>
              <p>Date</p>
              <div><p className="variable">{actualEventDate}</p></div>
            </div>
            </div>
            <div className="info-participants">
              <img
                src="https://www.flaticon.es/premium-icon/icons/svg/3249/3249789.svg"
                alt="participants-icon"
              />
              <p className="info-var">{actualEventParticipants}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventItem;

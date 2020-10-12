import React from "react";
import APImap from "../mapComponent/Map";
import { useState, useEffect } from "react";
import "./EventDetail.scss";
import eventStore from "../../stores/EventsStore";
import {
  deleteEvent,
  joinEvent,
  loadEvent,
} from "../../actions/EventDetailAction";
import { useAuth0 } from "@auth0/auth0-react";
import UpdateEventForm from "../forms-material-UI-components/UpdateEventFormComponent";
import userStore from "../../stores/UserStore";
import { loadUser } from "../../actions/userActions";
import { useHistory } from "react-router-dom";

function EventDetail(props) {
  const history = useHistory();
  const { user } = useAuth0();

  const [localUser, setLocalUser] = useState(userStore.getUser());

  const [event, setEvent] = useState(
    eventStore.getEventById(props.match.params.eventId)
  );

  const [isOwner, setIsOwner] = useState(
    userStore.isEventOwner(props.match.params.eventId)
  );
  const [updateForm, setUpdateForm] = useState(false);

  const [isSubscribed, setIsSubscribed] = useState(
    eventStore.isSubscribed(localUser?._id)
  );

  useEffect(() => {
    loadUser(user?.sub);
  }, []);

  useEffect(() => {
    eventStore.addChangeListener(onChange);
    userStore.addChangeListener(onChange);

    if (!event) {
      loadEvent(props.match.params.eventId);
    } else if (!localUser) {
      loadUser(user?.sub);
    }

    return () => {
      eventStore.removeChangeListener(onChange);
      userStore.removeChangeListener(onChange);
    };
  }, [event, props.match.params.eventId, user]);

  function onChange() {
    setEvent(eventStore.getEvent());
    setIsOwner(userStore.isEventOwner(props.match.params.eventId));
    setLocalUser(userStore.getUser());
    setIsSubscribed(eventStore.isSubscribed(localUser?._id));
  }

  function onDelete(event, eventId) {
    event.preventDefault();
    deleteEvent(eventId);
    alert("The event has been deleted");
    history.push("/");
  }

  function onSubmit(event, eventId, user) {
    event.preventDefault();
    joinEvent(eventId, user);
  }

  function showForm(event) {
    event.preventDefault();
    if (updateForm) {
      setUpdateForm(false);
    } else {
      setUpdateForm(true);
    }
  }

  return (
    <>
      {event ? (
        <div className="desktop__container flex__column">
          <div className="title__container flex__row">
            <img src={event.photo} />
            <h2>{event.title}</h2>
          </div>
          <div className="main__container flex__column">
            <div className="desktop-left__container">
              <div className="description__container">
                <h2>Description</h2>
                <div className="paragraph__container">
                  <p>{event.description}</p>
                </div>
              </div>

              <div className="info__container flex__row">
                <div className="start__section flex__row">
                  <div className="start-flag">
                    <img
                      src="https://image.flaticon.com/icons/svg/1505/1505471.svg"
                      alt=""
                    />
                  </div>
                  <div className="start-time flex__column">
                    <div>
                      <p>Start</p>
                    </div>
                    <div className="event-time">{event.start}</div>
                  </div>
                </div>

                <div className="flex__column">
                  <div className="flex__row date-icon__container">
                    <img
                      className="start-flag"
                      src="https://image.flaticon.com/icons/svg/3445/3445710.svg"
                      alt=""
                    />
                    <p>Date</p>
                  </div>
                  <div className="event-time">{event.date}</div>
                </div>

                <div className="start__section flex__row">
                  <div className="start-flag">
                    <img
                      src="https://image.flaticon.com/icons/svg/1505/1505471.svg"
                      alt=""
                    />
                  </div>
                  <div className="start-time flex__column">
                    <div>
                      <p>Finish</p>
                    </div>
                    <div className="event-time">{event.finish}</div>
                  </div>
                </div>
              </div>
              {localUser && (
                <div className="inscription__container flex__row">
                  {!isOwner && (
                    <>
                      {!isSubscribed && (
                        <button
                          className="inscription__button"
                          onClick={(clickEvent) =>
                            onSubmit(clickEvent, event._id, user)
                          }
                        >
                          I'm in!
                        </button>
                      )}
                      {isSubscribed && (
                        <button
                          className="inscription__button"
                          onClick={(clickEvent) =>
                            onSubmit(clickEvent, event._id, user)
                          }
                        >
                          I'm out
                        </button>
                      )}
                    </>
                  )}
                  {isOwner && (
                    <>
                      <button
                        className="inscription__button"
                        onClick={(clickEvent) =>
                          onDelete(clickEvent, event._id)
                        }
                      >
                        Delete
                      </button>
                      <button
                        className="inscription__button"
                        onClick={(clickEvent) => showForm(clickEvent)}
                      >
                        Update
                      </button>
                    </>
                  )}

                  <div className="counter flex__row">
                    <div>
                      <span>
                        <img
                          src="https://www.flaticon.es/premium-icon/icons/svg/3249/3249789.svg"
                          alt=""
                        />
                      </span>
                    </div>
                    <div>
                      <p>
                        <span className="counter__number">
                          {event.participants.length}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="map__container">
              {updateForm && (
                <div className="update-form__container">
                  <UpdateEventForm
                    title={event.title}
                    date={event.date}
                    description={event.description}
                    start={event.start}
                    finish={event.finish}
                    photo={event.photo}
                    eventId={event._id}
                    city={event.city}
                    street={event.street}
                  />
                </div>
              )}
              {!updateForm && (
                <APImap city={event.city} street={event.street} />
              )}
            </div>
          </div>
        </div>
      ) : (
        <p>No event!</p>
      )}
    </>
  );
}

export default EventDetail;

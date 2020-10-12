import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { useAuth0 } from "@auth0/auth0-react";
import { createEvent } from "../../actions/EventDetailAction";
import { useEffect } from "react";
import userStore from "../../stores/UserStore";
import { loadUser } from "../../actions/userActions";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
      fontFamily: "Kufam",
    },
  },
}));

export default function CreateEventForm() {
  const history = useHistory();
  const { user, isAuthenticated } = useAuth0();

  const [mongoUser, setMongoUser] = useState("");
  const [eventPhoto, setEventPhoto] = useState("");
  const [eventTitle, setEventTitle] = useState('')
  const [eventDescription, setEventDescription] = useState("");
  const [eventStartTime, setEventStartTime] = useState("");
  const [eventFinishTime, setEventFinishTime] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventCity, setEventCity] = useState("");
  const [eventStreet, setEventStreet] = useState("");
  

  const classes = useStyles();

  useEffect(() => {
    userStore.addChangeListener(onChange);

    if (isAuthenticated && !mongoUser) {
      (async function asyncLoad() {
        await loadUser(user.sub);
        setMongoUser(userStore.getUser());
      })();
    }

    return () => userStore.removeChangeListener(onChange);
  });

  function onChange() {
    setMongoUser(userStore.getUser());
  }

  function onClickCreateEvent(
    event,
    owner,
    photo,
    title,
    description,
    startTime,
    finishTime,
    date,
    city,
    street
  ) {
    if( eventPhoto === '' || eventPhoto === '' || eventDescription === '' || eventStartTime === '' || eventFinishTime === '' || eventDate === '' || eventCity === '' || eventStreet === '' ){
      alert('You need to complete all the fields to be able to create the event')
      return false;
    } else {
      alert('The event was created succesfuly')
      event.preventDefault();
      createEvent(
        owner,
        photo,
        title,
        description,
        startTime,
        finishTime,
        date,
        city,
        street
      );
      history.push("/");
    }
  }

  return (
    <>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          required
          id="standard-basic"
          label="Photo URL"
          value={eventPhoto}
          error={eventPhoto === ""}
          onChange={(event) => {
            event.preventDefault();
            setEventPhoto(event.target.value);
          }}
        />
        <TextField
          required
          id="standard-basic"
          label="Title"
          error={eventTitle === ""}
          value={eventTitle}
          onChange={(event) => {
            event.preventDefault();
            setEventTitle(event.target.value);
          }}
        />
        <TextField
          id="standard-textarea"
          label="Description"
          placeholder="Description here"
          value={eventDescription}
          error={eventDescription === ""}
          onChange={(event) => {
            event.preventDefault();
            setEventDescription(event.target.value);
          }}
          multiline
        />
        <TextField
          required
          id="standard-basic"
          label="City"
          value={eventCity}
          error={eventCity === ""}
          onChange={(event) => {
            event.preventDefault();
            setEventCity(event.target.value);
          }}
        />
        <TextField
          required
          id="standard-basic"
          label="Street"
          value={eventStreet}
          error={eventStreet === ""}
          onChange={(event) => {
            event.preventDefault();
            setEventStreet(event.target.value);
          }}
        />
        <TextField
          required
          value={eventDate}
          onChange={(event) => setEventDate(event.target.value)}
          id="date"
          label="Date"
          type="date"
          className={classes.textField}
          error={eventDate === ""}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          required
          value={eventStartTime}
          onChange={(event) => setEventStartTime(event.target.value)}
          id="time"
          label="Start Time"
          type="time"
          className={classes.textField}
          error={eventStartTime === ""}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
        />
        <TextField
          required
          value={eventFinishTime}
          onChange={(event) => setEventFinishTime(event.target.value)}
          id="time"
          label="Finish Time"
          type="time"
          className={classes.textField}
          error={eventFinishTime === ""}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
        />
        <button
          className="create-form-button"
          onClick={(event) =>
            onClickCreateEvent(
              event,
              mongoUser?._id,
              eventPhoto,
              eventTitle,
              eventDescription,
              eventStartTime,
              eventFinishTime,
              eventDate,
              eventCity,
              eventStreet
            )
          }
        >
          CREATE EVENT
        </button>
      </form>
    </>
  );
}

import dispatcher from "../dispatcher";
import actionTypes from "./actionTypes";
import axios from "axios";

export function loadEvents() {
  return axios
    .get("/api/events")
    .then((events) => {
      dispatcher.dispatch({
        type: actionTypes.LOAD_EVENTS,
        data: events.data,
      });
    })
    .catch((error) => {
      console.error(error);
    });
}

export function loadEvent(eventId) {
  return axios
    .get(`/api/events/${eventId}`)
    .then((event) => {
      dispatcher.dispatch({
        type: actionTypes.LOAD_EVENT,
        data: event.data,
      });
    })
    .catch((error) => {
      console.error(error);
    });
}

export function createEvent(
  owner,
  photo,
  title,
  description,
  start,
  finish,
  date,
  city,
  street
) {
  return axios
    .post(`/api/events`, {
      owner,
      photo,
      title,
      description,
      start,
      finish,
      date,
      city,
      street,
    })
    .then((eventResponse) => {
      dispatcher.dispatch({
        type: actionTypes.CREATE_EVENT,
        data: eventResponse.data,
      });
    })
    .catch((error) => {
      console.error(error);
    });
}

export function deleteEvent(id) {
  return axios.delete(`/api/events/${id}`).then((eventResponse) => {
    dispatcher.dispatch({
      type: actionTypes.DELETE_EVENT,
      data: eventResponse,
    });
  });
}

export function joinEvent(id, user) {
  return axios.put(`/api/events/${id}`, { user }).then((event) => {
    dispatcher.dispatch({
      type: actionTypes.JOIN_EVENT,
      data: event.data,
    });
  });
}

export function updateEvent(
  eventId,
  owner,
  photo,
  title,
  description,
  start,
  finish,
  date,
  city,
  street
) {
  return axios
    .patch(`/api/events/${eventId}`, {
      owner,
      photo,
      title,
      description,
      start,
      finish,
      date,
      city,
      street,
    })
    .then((eventResponse) => {
      dispatcher.dispatch({
        type: actionTypes.CREATE_EVENT,
        data: eventResponse.data,
      });
    })
    .catch((error) => {
      console.error(error);
    });
}

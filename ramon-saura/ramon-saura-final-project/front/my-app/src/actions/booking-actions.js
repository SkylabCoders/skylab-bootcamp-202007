import bookingList from "../bookings.js";
import dispatcher from "../dispatcher";
import actionTypes from "./action-types";

export function loadBooking() {
  return new Promise((resolve) => {
    resolve(bookingList);
  }).then((rooms) => {
    dispatcher.dispatch({
      type: actionTypes.LOAD_BOOKING_ROOMS,
      data: rooms,
    });
  });
}

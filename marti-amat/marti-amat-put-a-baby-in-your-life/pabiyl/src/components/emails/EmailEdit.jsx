import React, { useState, useEffect } from "react";
import "./emailEdit.css";
import userStore from "../../stores/userStore";
import authStore from "../../stores/authStore";
import emailStore from "../../stores/emailStore";
import { saveEmail } from "../../actions/emailActions";
import { loadDetails } from "../../actions/detailAction";
import { NavLink } from "react-router-dom";

function EmailEdit(props) {
  const [emailEmisor] = useState(authStore.getUserEmail());
  const [emailReceptor] = useState(
    userStore.getDetailUserById(props.match.params.detailUserId).email
  );
  const [nameReceptor] = useState(
    userStore.getDetailUserById(props.match.params.detailUserId).name
  );
  const [nameEmisor, setNameEmisor] = useState();
  const [date] = useState(myDate());
  const [hour] = useState(myHour());
  const [minute] = useState(myMinute());
  const [bodyMissage, setBodyMissage] = useState();
  function myDate() {
    var f = new Date();
    const dateString = `${f.getDate()} /  ${
      f.getMonth() + 1
    } / ${f.getFullYear()}`;
    return dateString;
  }
  function myHour() {
    var f = new Date();
    const hourString = f.getHours();
    return hourString;
  }
  function myMinute() {
    var f = new Date();
    const minuteString = f.getMinutes();
    return minuteString;
  }

  console.log("·····", emailEmisor, emailReceptor, nameReceptor, date, hour);
  function onFieldChange(value, setValue) {
    setValue(value);
  }

  useEffect(() => {
    userStore.addChangeListener(onChange);
    loadDetails();
    return () => userStore.removeChangeListener(onChange);
  }, [onChange]);
  function onChange() {
    setNameEmisor(userStore.getDetailUserByEmail(emailEmisor).name);
  }
  function send() {
    saveEmail({
      emisor: emailEmisor,
      emisorName: nameEmisor,
      receptor: emailReceptor,
      date,
      hour,
      minute,
      bodyMissage,
    });
  }
  const link = "/detailUser/" + props.match.params.detailUserId;
  return (
    <main className="main__edit--email">
      <form method="get">
        <div className="email__container--edit">
          <div className="name__email--edit text__email--edit">
            message to: {nameReceptor}
          </div>
          <input
            type="text"
            onChange={(event) =>
              onFieldChange(event.target.value, setBodyMissage)
            }
            className="missage__email--edit "
          ></input>
          <NavLink className="navLink__edit--email" to={link}>
            <button className="button__email--edit" onClick={send}>
              SEND!
            </button>
          </NavLink>
        </div>
      </form>
    </main>
  );
}
export default EmailEdit;

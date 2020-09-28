import React, { useState, useEffect } from "react";
import emailStore from "../../stores/emailStore";
import { loadEmails } from "../../actions/emailActions";
import userStore from "../../stores/userStore";
import { loadDetails } from "../../actions/detailAction";
import { NavLink } from "react-router-dom";

import "./detailEmail.css";

function DetailEmail(props) {
  const [emails, setEmails] = useState(emailStore.getEmails());
  const [users, setUsers] = useState(userStore.getDetailUsers());
  const [detailElement, setDetailElement] = useState({});
  const [detailUserId, setDetailUserId] = useState();

  useEffect(() => {
    emailStore.addChangeListener(onChange);

    let emailId = props.match.params.emailId;
    if (emails.length === 0) {
      loadEmails();
    } else if (emailId) {
      const email = emailStore.getEmailById(emailId);
      if (email) {
        setDetailElement(email);
      }
    }
    return () => emailStore.removeChangeListener(onChange);
  }, [onChange]);

  function onChange() {
    setEmails(emailStore.getEmails());
  }
  useEffect(() => {
    userStore.addChangeListener(anotherChange);

    loadDetails();

    return () => userStore.removeChangeListener(anotherChange);
  }, []);

  function anotherChange() {
    setUsers(userStore.getDetailUsers());
  }
  setTimeout(function () {
    if (detailElement) {
      const elementX = users.find(
        (element) => element.email === detailElement.emisor
      );
      if (elementX) {
        setDetailUserId(elementX._id);
      }
    }
  }, 1500);
  let link = "";
  if (detailUserId) {
    link = "/detailUser/" + detailUserId;
  }

  return (
    <main className="main__detail--email">
      <div className="email__container--detail">
        <NavLink to={link}>
          <div className="name__email text__email">
            from: {detailElement.emisorName}
          </div>
        </NavLink>
        <div className="text__email">date: {detailElement.date}</div>
        <div className="text__email time--email">
          hour: {detailElement.hour} : {detailElement.minute}
        </div>
        <div className="missage__email ">{detailElement.bodyMissage}</div>
      </div>
    </main>
  );
}
export default DetailEmail;

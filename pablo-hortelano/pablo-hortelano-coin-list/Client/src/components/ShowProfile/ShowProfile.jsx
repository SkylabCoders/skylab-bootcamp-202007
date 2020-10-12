import React from "react";
import Header from "../Common/Header/Header";
import { Container } from "@material-ui/core/";
import Profile from "../Profile/Profile";
import "./ShowProfile.scss";

function ShowProfile() {
  return (
    <>
      <Header />
      <Container maxWidth="sm" className="big-container__profile">
        <Container maxWidth="sm" className="big-container__profi__subprofile">
          <Profile />
        </Container>
      </Container>
    </>
  );
}

export default ShowProfile;

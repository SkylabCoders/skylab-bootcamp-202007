import React from "react";
import "./About.css";

function AboutUs() {
  return (
    <>
      <h2 className="title">Welcome to Fenizia</h2>
      <div className="img__contain">
        <div className="img__block">
          <img
            className="img__small"
            src="https://ca.slack-edge.com/T0SJKHBFZ-U013V09GQ9H-6f4454feee02-512"
          alt="Imagen Dani Alcalà"></img>
          <p>Dani Alcalà</p>
        </div>
        <div className="img__block">
          <img
            className="img__small"
            src="https://ca.slack-edge.com/T0SJKHBFZ-USCNAUTBL-e9acd67da6ce-512"
            alt="Imagen Simón Fernández"></img>
          <p>Simón Fernández</p>
        </div>
        <div className="img__block">
          <img
            className="img__small"
            src="https://ca.slack-edge.com/T0SJKHBFZ-U0106J9A473-c55b8880f483-512"
            alt="Imagen Esther Morillo"></img>
          <p>Esther Morillo</p>
        </div>
      </div>
      <p className="footer-text">
        This is a project made <b>in 3 days</b> at{" "}
        <a className="anchor__skylab" href="https://www.skylabcoders.com/es">Skylab Coders academy</a>{" "}
        during the 2020/07 Bootcamp.
      </p>
    </>
  );
}

export default AboutUs;

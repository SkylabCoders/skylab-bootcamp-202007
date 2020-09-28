import React from "react";
import "./LoadingComponent.scss";



function Loading() {

  return (
    <div className="loading">
        <img src="https://i.imgur.com/FmYeL3j.gif" alt="loading-gif"/>
        <h2>Loading...</h2>
    </div>
  );
}

export default Loading;

import React from "react";
import BookingDetail from "./components/bookings/detail.jsx";
import { Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Switch>
        <Route path="/" exact component={BookingDetail} />
      </Switch>
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import Landing from "./components/Landing/Landing.jsx";
import { Route, Switch } from "react-router-dom";
import CoinDetail from "./components/CoinDetail/CoinDetail";
import AddCoin from "./components/AddCoin/AddCoin";
import AddMovement from "./components/AddMovement/AddMovement";
import ShowProfile from "./components/ShowProfile/ShowProfile";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/CoinDetail" component={CoinDetail} />
        <Route path="/AddCoin" component={AddCoin} />
        <Route path="/AddMovement" component={AddMovement} />
        <Route path="/Profile" component={ShowProfile} />
        {/* <Route
          path="/external"
          component={() => {
            window.location =
              "https://coinlist-app.eu.auth0.com/u/login?state=g6Fo2SBnUDA5aC1vanRVMDlqQ0dVeTU1TFdQc0VXblkzQTl5OKN0aWTZIEZoR0syWjZ1Y2x0Sm1ZVmV0ODNNQURCeGFiUDFsMHVVo2NpZNkgcFNXUTNFdHo1M09Jc1IxWjk2VHVnZ1NibjhGNkQ2cHQ";
            return null;
          }}
        /> */}
      </Switch>
    </>
  );
}

export default App;

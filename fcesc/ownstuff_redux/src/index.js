import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";
import "./index.css";
import configureStore from './redux/configureStore';
import { Provider as ReduxProvider } from 'react-redux';
//provider is a high-order component

const store = configureStore(); // this will overwrite the parameters in our reducers 
  // it can be interesting if we want to rehydrate state from server data for instance

render(
  <ReduxProvider store={store}>
    <Router>
      <App />
    </Router>
  </ReduxProvider>,
  document.getElementById("app")
);

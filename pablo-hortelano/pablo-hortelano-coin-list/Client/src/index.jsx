import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from "./redux/configureStore";
import { Provider as ReduxProvider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";

const store = configureStore();

ReactDOM.render(
  <Auth0Provider
    domain="coinlist-app.eu.auth0.com"
    clientId="pSWQ3Etz53OIsR1Z96TuggSbn8F6D6pt"
    redirectUri={window.location.origin}
  >
    <ReduxProvider store={store}>
      <React.StrictMode>
        <Router>
          <App />
        </Router>
      </React.StrictMode>
    </ReduxProvider>
  </Auth0Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

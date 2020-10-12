import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import configureStore from './redux/configureStore';
import { Provider } from 'react-redux';
import Auth0ProviderWithHistory from "./components/auth0/Auth0ProviderWithHistory";
import REDUCERS_INITIAL_STATE from './redux/reducers/REDUCERS_INITIAL_STATE';

export const store = configureStore(REDUCERS_INITIAL_STATE);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Auth0ProviderWithHistory>
          <App />
        </Auth0ProviderWithHistory>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();

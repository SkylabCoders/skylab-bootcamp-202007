
import React, { useState, useEffect } from 'react';
import './App.css';
import Entry from './components/entry.component';
import Home from './components/home.component'
import { Route, Switch } from "react-router-dom";
import Nav from './components/nav.component';
import Logo from './components/logo.component'
import Login from './components/login.component';
import Registrer from './components/register.component';
import UserEntries from './components/userEntries.component'
import Profile from './components/profile.component'
import Footer from './components/footer.component'
import EntryComment from './components/entryComment.component'
import { Fragment } from 'react';
import store from './store/store'
import { loadDetails } from './actions/userActions';
import AddEntry from './components/addEntry.component';

function App() {
  const [message, setMessage] = useState(false);
  const [user, setUser] = useState(null);
  const [details, setDetails] = useState(null);

  useEffect(() => {
    store.addChangeListener(onChange);
    let usu = store.getUser();
    if (!details) loadDetails()
    if (!user) {
      setUser(usu);
    }
    return () => {
      return store.removeChangeListener(onChange);
    };
  }, [user, details]);

  function onChange() {
    setUser(store.getUser())
    setMessage(store.getMessage())
    setDetails(store.getDetail())

  }

  return (
    <div>

      {!user && (
        <Switch>
          <Route path='/' exact render={props =>
            <Fragment>
              <Logo />
              <Login />
              {!!message && message}
              <Footer />
            </Fragment>}
          />
          <Route path='/register' render={props =>
            <Fragment>
              <Logo />
              <Registrer />
              {!!message && message}
              <Footer />
            </Fragment>}
          />
        </Switch>)}

      {!!user && (

        <Switch>
          <Route path='/' exact render={props =>
            <Fragment>
              <Logo />
              <Home />
              {!!message && message}
              <Footer />
            </Fragment>
          } />


          <Route path='/list' render={props =>
            <Fragment>
              <Nav />
              {!!details && <Entry list={details} />}
              {!!message && message}
              <Footer />
            </Fragment>
          } />
          <Route path='/profile' render={props =>
            <Fragment>
              <Nav />
              <Profile />
              {!!message && message}
              <Footer />
            </Fragment>
          } />
          <Route path='/user/favoruites' render={props =>
            <Fragment>
              <Nav />
              <UserEntries type={'favourites'} />
              {!!message && message}
              <Footer />
            </Fragment>
          } />
          <Route path='/user/entries' render={props =>
            <Fragment>
              <Nav />
              <UserEntries type={'entries'} />
              {!!message && message}
              <Footer />

            </Fragment>
          } />

          <Route path='/comments/:entryId' render={props =>
            <Fragment>
              <Nav />
              <EntryComment props={props} />
              {!!message && message}
              <Footer />
            </Fragment>
          } />
          <Route path='/addEntry' render={props =>
            <Fragment>
              <Nav />
              <AddEntry />
              {!!message && message}
              <Footer />
            </Fragment>
          } />


        </Switch>)
      }
    </div >
  );
}

export default App;

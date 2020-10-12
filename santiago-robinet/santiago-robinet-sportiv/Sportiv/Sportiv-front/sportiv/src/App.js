import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import EventDetail from '../src/components/event-detail-component/EventDetail'
import EventsList from '../src/components/events-list-component/EventsList'
import Header from './components/header-component/HeaderComponent';
import Home from './components/home-component/HomePageComponent';
import Profile from './components/profile-component/ProfileComponent';
import GroupList from './components/groups-list-component/GroupListComponent';
import GroupDetail from './components/group-detail-component/GroupDetailComponent';
import LessonsList from './components/lessons-list-component/LessonsListComponent'
import LessonDetail from './components/lessons-details-component/LessonsDetailsComponent'
import EventForm from './components/event-form-component/EventFormComponent'
import RenderMap from './components/mapComponent/MapComponent';

function App() {
  return (
    <Router>
      <Header />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/events" exact component={EventsList}/>
          <Route path="/events/:eventId"  component={EventDetail}/>
          <Route path="/groups" exact  component={GroupList}/>
          <Route path="/groups/:groupId"  component={GroupDetail}/>
          <Route path="/lessons"  exact component={LessonsList}/>
          <Route path="/lessons/:lessonId"  component={LessonDetail}/>
          <Route path="/event-form"  component={EventForm}/>
          <Route path="/explore"  component={RenderMap}/>
          <Route path="/profile"  component={Profile}/>
        </Switch>
    </Router>
   
  );
}

export default App;

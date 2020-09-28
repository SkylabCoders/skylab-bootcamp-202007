import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import BookDetail from './components/detail/BookDetail';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Profile from './components/auth/userProfile/Profile';
import Footer from './components/footer/Footer';
import SearchComponent from './components/search/SearchComponent';

function App() {
    return (
        <>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/auth/profile" component={Profile} />
                <Route path="/search" component={SearchComponent} />
                <Route path="/book/:bookId" component={BookDetail} />
            </Switch>
            <Footer />
        </>
    );
}

export default App;

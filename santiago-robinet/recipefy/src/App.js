import React from 'react';
import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Profile from "./components/Profile";
import RecipePage from "./components/RecipePage";
import SearchResult from "./components/SearchResult";
import UserFavourite from "./components/UserFavourite";


function App() {
  return (
   <>
   <Header/>
  
     <Switch>
       <Route path="/" exact component={Main}/>
       <Route path="/profile" component={Profile}/>
       <Route path="/recipe-page" component={RecipePage}/>
       <Route path="/search-result" component={SearchResult}/>
       <Route path="/userfavourite" component={UserFavourite}/>
     </Switch>
   
   <Footer/>
   </>
  );
}

export default App;

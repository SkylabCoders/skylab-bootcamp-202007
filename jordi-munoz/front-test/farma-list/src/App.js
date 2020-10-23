import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={ProductList} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

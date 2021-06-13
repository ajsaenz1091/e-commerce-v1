import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Home'
import Shop from './Shop'
import Cart from './Cart'

const App = () => {



  return (
    <div className="App">
      <Switch>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/shop">
          <Shop />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

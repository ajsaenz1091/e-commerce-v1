import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Home'
import Shop from './Shop'
import Cart from './Cart'
import Hats from './hats/Hats'

const App = () => {



  return (
    <div className="App">
      <Switch>
        <Route exact path="/shop/hats">
          <Hats />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/shop">
          <Shop />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

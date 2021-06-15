import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from '../Components/header/Header'
import Home from './Home'
import Shop from './Shop'
import Cart from './cart-page/Cart'

const App = () => {



  return (
    <div className="App">
      <Header />
      <Switch>
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

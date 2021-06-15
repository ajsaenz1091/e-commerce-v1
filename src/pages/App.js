import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from '../Components/header/Header'
import Home from './home-page/Home'
import Shop from './shop-page/Shop'
import Cart from './cart-page/Cart'

const App = () => {

  // State variables that shop-page will use
  const [collections, setCollection] = useState([])
  const [shopDataResource, setShopUrl] = useState('http://localhost:3001/shopData')

  // State variables to pass to cart-page
  const [cartItems, setCartItems] = useState([])
  const [cartItemsResource, setCartUrl] = useState('http://localhost:3001/cartItems')

  // Fetch to populate collections
  useEffect(() => {
    fetch(shopDataResource)
    .then(res => res.json())
    .then(data => setCollection(data))
  }, [shopDataResource])

  //Fetch to populate cartItems
  useEffect(() => {
    fetch(cartItemsResource)
    .then(res => res.json())
    .then(data => setCartItems(data))
  }, [])

  const addItemToCart = (itemData) => {
    const configObj = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(itemData)
    }

    fetch(cartItemsResource, configObj)
  }

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/cart">
          <Cart cartItems={cartItems}/>
        </Route>
        <Route exact path="/shop">
          <Shop collections={collections} addItemToCart={addItemToCart}/>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

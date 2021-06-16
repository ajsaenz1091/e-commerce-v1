import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from '../Components/header/Header'
import Home from './home-page/Home'
import Shop from './shop-page/Shop'
import Cart from './cart-page/Cart'
import CartItem from '../Components/cart-item/CartItem';

const App = () => {

  // State variables that shop-page will use
  const [collections, setCollection] = useState([])
  const [shopDataResource, setShopUrl] = useState('http://localhost:3001/shopData')

  // State variables to pass to cart-page
  const [cartItems, setCartItems] = useState([])
  const [cartItemsResource, setCartUrl] = useState('http://localhost:3001/cartItems')
  const [itemCount, setItemCount] = useState(0)

  // state variable to pass to Shop to know which collection to display
  const [collecId, setCollecId] = useState(0)

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
    setItemCount(calculateItemsInCart)
  }, [itemCount])

  // Update Item count 
  useEffect(() => {
    setItemCount(calculateItemsInCart())
  }, [cartItems])

  //Function to check if item already exists in cartItems

  // const checkIfItemInCart = (itemToAdd) => {
  //   console.log(cartItems)
  //   // Checks if the item exists in cartItems
  //   const existingItem = cartItems.find(cartItem => {
  //       return cartItem.id === itemToAdd.id
  //   })
  //   console.log(existingItem)

  //   if(existingItem) {
  //     setItemCount(cartItems.length)
  //     return cartItems.map(cartItem => {
  //       return cartItem.id === itemToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem
  //     })
  //   }
  //   setItemCount(cartItems.length)
  // }

  // Function to calculate amount of item in cart

  const calculateItemsInCart = () => {
    return cartItems.reduce((acc,cartItem) => {
      return acc + cartItem.quantity
    },0)
  }

  // function to add itmes to cart
  const addItemToCart = async (itemToAdd) => {

    const existingItem = cartItems.find(cartItem => {
      return cartItem.name === itemToAdd.name
    })

    if(existingItem) {
      // setItemCount(cartItems.length)
      const updatedCartItems = cartItems.map(cartItem => {
        return cartItem.name === itemToAdd.name ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem
      })
      setCartItems(updatedCartItems)
      const configObj = {
        method: 'PATCH',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          quantity: existingItem.quantity + 1
        })
      }
      fetch(`${cartItemsResource}/${existingItem.id}`, configObj)
      // const itemsInCart = calculateItemsInCart()
      // setItemCount(itemsInCart)
    }else {

      const configObj = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(itemToAdd)
      }
  
      fetch(cartItemsResource, configObj)
      .then(res => res.json())
      .then(postedItem => updateCartItems(postedItem))

      const updateCartItems =  (postedItem) => {
        setCartItems([...cartItems,postedItem])

      // const itemsInCart = calculateItemsInCart()
      // setItemCount(itemsInCart)
    }

    
    
  }
    // setCartItems(checkIfItemInCart(itemToAdd))
}

  // function to remove items from cart
   const removeFromCart = async (id) => {
    const url = `http://localhost:3001/cartItems/${id}`
    console.log('removed')

    const configObj = {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }

    await fetch(url, configObj)

    removeItem(id)

    // let itemsInCart = calculateItemsInCart()
    // setItemCount(itemsInCart)
  }

  // Update front end when removing items from cart individually
  const removeItem = (id) => {
    // if(itemCount > 0 ) {
    //   setItemCount(cartItems.length)
    // }
    let updatedCartItems = cartItems.filter(item => {
      return item.id !== id
    })
    setCartItems(updatedCartItems)
  }

  // FUNCTION TO SET COLLECID IN STATE
  const setCollectionId = (id) => {
    setCollecId(id)
  }

  return (
    <div className="App">
      <Header itemCount={itemCount}/>
      <Switch>
        <Route exact path="/cart">
          <Cart cartItems={cartItems} removeFromCart={removeFromCart}/>
        </Route>
        <Route path="/shop">
          <Shop collecId={collecId} collections={collections} addItemToCart={addItemToCart}/>
        </Route>
        <Route exact path="/">
          <Home setCollectionId={setCollectionId} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

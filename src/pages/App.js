import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from '../Components/header/Header'
import SignupLogin from './signup-login-page/SignupLogin'
import Home from './home-page/Home'
import Shop from './shop-page/Shop'
import Cart from './cart-page/Cart'
import Logout from '../Components/logout/Logout'

import { useHistory } from 'react-router-dom';

import {auth} from '../firebase/firebase.utils'

const App = () => {

  const history = useHistory()

  // Set errors 
  const [errors, setErrors] = useState([]);

  //Store current user and cart in state
  // const [currentCart, setCurrentCart] = useState({})
  const [currentUser, setCurrentUser] = useState(null)

  // State variables that shop-page will use
  const [collections, setCollection] = useState([])
  // const [shopDataResource, setShopUrl] = useState('/categories')

  // State variables to pass to cart-page
  const [cartId, setCartId] = useState(null)
  const [cartItems, setCartItems] = useState([])
  // const [cartItemsResource, setCartUrl] = useState('/carts/1')
  const [itemCount, setItemCount] = useState(0)

  // state variable to pass to Shop to know which collection to display
  const [collecId, setCollecId] = useState(0)
  const [searchTerm , setTerm] = useState("")

  //Handle User signup and login

  const handleUserLoginAndSignup = async (data) => {
    if (data.errors){
      setErrors(data.errors)
    }else{
      const {id, username, cart, cart:{cart_items}} = data
      await setCurrentUser({id,username})
      await setCartId(cart.id)
      await setCartItems(cart_items)
      history.push('/')
      setErrors([])
    }
  }
  

  //sets up communication between this app and firebase
  // let unsubscribeFromAuth = null

  
  // useEffect(() => {
  //   unsubscribeFromAuth = auth.onAuthStateChanged(user => {
  //     if(user) {
  //       setCurrentUser(user);
  //     }else{
  //       setCurrentUser(null)
  //     }

  //     console.log(user);
  //   })

  //   unsubscribeFromAuth();
  // }, [])


  // Fetch to populate collections
  useEffect(() => {
    fetch('/categories')
    .then(res => res.json())
    .then(data => setCollection(data))
  }, [])

  //Check if user in session fetch to users show action
    //Use data to set current user, cartId and cartItems
  const setStateWithData = async (data) =>{
    console.log("data",data)
    if (data.errors){
      setErrors(data.errors)
    }else{
      const {id, username, cart, cart:{cart_items}} = data
      await setCurrentUser({id,username})
      await setCartId(cart.id)
      await setCartItems(cart_items)
      history.push('/')
      setErrors([])
    }
  }
  const checkSessionId = () => {
    fetch('/me')
    .then(resp => resp.json())
    .then(data => setStateWithData(data))
  }

  useEffect( () => 
    currentUser ? setItemCount(calculateItemsInCart) : null ,
    [cartItems])

  useEffect(() => {
    checkSessionId()
    // setItemCount(calculateItemsInCart)
  }, [])

  // Update Item count 
  // useEffect(() => {
  //     setItemCount(calculateItemsInCart())
  // }, [cartItems])

  const calculateItemsInCart = () => {
    return cartItems.reduce((acc,cartItem) => {
      return acc + cartItem.quantity
    },0)
  }

  // function to add itmes to cart
  const addItemToCart = async (itemToAdd) => {

    const existingItem = cartItems.find(cartItem => {
      return cartItem.item.name === itemToAdd.name
    })
    console.log(existingItem)

    if(existingItem) {
      setItemCount(cartItems.length)
      const updatedCartItems = cartItems.map(cartItem => {
        return cartItem.item.name === itemToAdd.name ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem
      })
      setCartItems(updatedCartItems)
      const configObj = {
        method: 'PATCH',
        credentials: 'include',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          quantity: existingItem.quantity + 1
        })
      }
      fetch(`/cart_items/${existingItem.id}`, configObj)
      const itemsInCart = calculateItemsInCart()
      setItemCount(itemsInCart)
    }else {

      const configObj = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({...itemToAdd, quantity: 1})
      }
  
      fetch("/cart_items", configObj)
      .then(res => res.json())
      .then(postedItem => setCartItems([...cartItems,postedItem]))

      const itemsInCart = calculateItemsInCart()
      setItemCount(itemsInCart)
  }
    // setCartItems(checkIfItemInCart(itemToAdd))
}

  // function to remove items from cart
   const removeFromCart = async (id) => {
    const url = `/cart_items/${id}`

    const configObj = {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }

    await fetch(url, configObj)

    removeItem(id)

    let itemsInCart = calculateItemsInCart()
    setItemCount(itemsInCart)
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

  const handleSearch = (input) => {
      setTerm(input)
  }

  const searchedCollections = collections.map(collection => {
    return {...collection, items: collection.items.filter(item => {
      return item.name.toLowerCase().includes(searchTerm.toLowerCase())
    })}
  })

  // const [searchedCollections, setSearched] = useState(searchedColletions)
  // const searchedCollections = collections.filter(collection => {
  //   return searchTerm === "" ? collection : collection.title.toLowerCase().includes(searchTerm.toLowerCase())
  // })

  

  return (
    <div className="App">
      <Header currentUser={currentUser} setCurrentUser={setCurrentUser} itemCount={itemCount}/>
      <Switch>
        <Route exact path="/signup">
          <SignupLogin handleUserLoginAndSignup={handleUserLoginAndSignup}/>
        </Route>
        <Route exact path='/logout'>
            <Logout setCurrentUser={setCurrentUser}/>
        </Route>
        <Route exact path="/cart">
          <Cart cartItems={cartItems} removeFromCart={removeFromCart}/>
        </Route>
        <Route path="/shop">
          <Shop collecId={collecId} cartId={cartId} collections={searchedCollections} searchTerm={searchTerm} handleSearch={handleSearch} addItemToCart={addItemToCart}/>
        </Route>
        <Route exact path="/">
          <Home setCollectionId={setCollectionId} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

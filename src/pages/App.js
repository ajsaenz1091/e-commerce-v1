import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from '../Components/header/Header'
import SignupLogin from './signup-login-page/SignupLogin'
import Home from './home-page/Home'
import Shop from './shop-page/Shop'
import Cart from './cart-page/Cart'

const App = () => {

  // State variables that shop-page will use
  const [collections, setCollection] = useState([])
  const [shopDataResource, setShopUrl] = useState('http://localhost:3001/categories')

  // State variables to pass to cart-page
  const [cartId, setCartId] = useState(0)
  const [cartItems, setCartItems] = useState([])
  const [cartItemsResource, setCartUrl] = useState('http://localhost:3001/carts/1')
  const [itemCount, setItemCount] = useState(0)

  // state variable to pass to Shop to know which collection to display
  const [collecId, setCollecId] = useState(0)
  const [searchTerm , setTerm] = useState("")

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
    .then(data => {
      setCartId(data.id)
      setCartItems(data.cart_items)
    })
    setItemCount(calculateItemsInCart)
  }, [itemCount])

  // Update Item count 
  useEffect(() => {
    setItemCount(calculateItemsInCart())
  }, [cartItems])

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
      // setItemCount(cartItems.length)
      const updatedCartItems = cartItems.map(cartItem => {
        return cartItem.item.name === itemToAdd.name ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem
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
      fetch(`http://localhost:3001/cart_items/${existingItem.id}`, configObj)
      // const itemsInCart = calculateItemsInCart()
      // setItemCount(itemsInCart)
    }else {

      const configObj = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({...itemToAdd, cart_id: cartId, quantity: 1})
      }
  
      fetch("http://localhost:3001/cart_items", configObj)
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
    const url = `http://localhost:3001/cart_items/${id}`

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
      <Header itemCount={itemCount}/>
      <Switch>
        <Route exact path="/signup">
          <SignupLogin />
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

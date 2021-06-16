import React, { useState, useEffect } from 'react';

import './Cart.styles.scss'

import CartItem from '../../Components/cart-item/CartItem'

import CustomButton from '../../Components/custom-button/CustomButton'

const Cart = ({cartItems, removeFromCart}) => {

    // const [cartItems, setCartItems] = useState([])

    // useEffect(() => {
    //   const url = 'http://localhost:3001/cartItems'
    //   fetch(url)
    //   .then(res => res.json())
    //   .then(data => setCartItems(data))
    // }, [])

    const renderCartItems = () => {
      return cartItems.map(item => <CartItem key={item.id} item={item} removeFromCart={removeFromCart}/>)
    }

    return (
        <div className='cart-container'>
          <div className="cart-items">
            {renderCartItems()}
          </div>
          <div className="button">
            <CustomButton > CHECKOUT </CustomButton>
          </div>
        </div>
    )
}

export default Cart;
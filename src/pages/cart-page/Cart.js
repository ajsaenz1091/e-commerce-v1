import React, { useState, useEffect } from 'react';

import './Cart.styles.scss'

import CustomButton from '../../Components/custom-button/CustomButton'

const Cart = () => {

    // const [cartItems, setCartItems] = useState([])

    // useEffect(() => {
    //   const url = 'http://localhost:3001/cartItems'
    //   fetch(url)
    //   .then(res => res.json())
    //   .then(data => setCartItems(data))
    // }, [])



    return (
        <div className='cart-container'>
          <div className="cart-items">
            
          </div>
          <div className="button">
            <CustomButton > CHECKOUT </CustomButton>
          </div>
        </div>
    )
}

export default Cart;
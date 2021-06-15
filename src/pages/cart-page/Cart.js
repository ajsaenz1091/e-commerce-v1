import React from 'react';

import './Cart.styles.scss'

import CustomButton from '../../Components/custom-button/CustomButton'

const Cart = () => {

    return (
        <div className='cart-container'>
          <div className="cart-items">
          
          </div>
          <div className="button">
            <CustomButton > CHECKOUT</CustomButton>
          </div>
        </div>
    )
}

export default Cart;
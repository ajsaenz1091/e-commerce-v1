import React from 'react'
import CustomButton from '../custom-button/CustomButton'

import './CardItem.styles.scss'


const CartItem = ({ cartItem, removeFromCart }) => {
    const {img_url, price, name, quantity } = cartItem.item

    const handleClick = () => {
        removeFromCart(cartItem.id)
    }
    return (
        <div className="cart-item">
            <img src={img_url} alt="item" />
            <div className="item-details">
                <span className="name">{name}</span>
                <span className="price">{cartItem.quantity} x ${price}</span>
            </div>
            <CustomButton onClick={handleClick} inverted> Remove </CustomButton>
        </div>
    )
}

export default CartItem
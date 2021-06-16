import React from 'react'
import CustomButton from '../custom-button/CustomButton'

import './CardItem.styles.scss'


const CartItem = ({ item, removeFromCart }) => {
    const {imageUrl, price, name, quantity } = item

    const handleClick = () => {
        removeFromCart(item.id)
    }
    return (
        <div className="cart-item">
            <img src={imageUrl} alt="item" />
            <div className="item-details">
                <span className="name">{name}</span>
                <span className="price">{quantity} x ${price}</span>
            </div>
            <CustomButton onClick={handleClick} inverted> Remove </CustomButton>
        </div>
    )
}

export default CartItem
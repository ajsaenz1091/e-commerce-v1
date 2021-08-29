import React from 'react'

import CustomButton from '../custom-button/CustomButton'

import './CollectionItem.styles.scss'


const CollectionItem = ({item, addItemToCart, cartId}) => {
    const {id, img_url, price, name, quantity} = item

    const handleClick = () => {
        const itemToAdd = {
            name:name,
            // img_url:img_url,
            // price:price,
            // quantity: quantity + 1
            cart_id: cartId,
            item_id: id
        }
        addItemToCart(itemToAdd)
    }

    return (
        <div className="collection-item">
            <div 
            className="image"
            style={{
                backgroundImage: `url(${img_url})`
            }}/>
               <div className="collection-footer">
                   <span className="name">{name}</span>
                   <span className="price">${price}</span> 
               </div> 
               <CustomButton onClick={handleClick} inverted> Add to cart </CustomButton>
        </div>
    )
}

export default CollectionItem
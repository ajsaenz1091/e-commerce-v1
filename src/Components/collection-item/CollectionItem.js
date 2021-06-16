import React from 'react'

import CustomButton from '../custom-button/CustomButton'

import './CollectionItem.styles.scss'


const CollectionItem = ({item, addItemToCart}) => {
    const {id, imageUrl, price, name, quantity} = item

    const handleClick = () => {
        const itemToAdd = {
            name:name,
            imageUrl:imageUrl,
            price:price,
            quantity: quantity + 1
        }
        addItemToCart(itemToAdd)
    }

    return (
        <div className="collection-item">
            <div 
            className="image"
            style={{
                backgroundImage: `url(${imageUrl})`
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
import React from 'react'

import CustomButton from '../custom-button/CustomButton'

import './CollectionItem.styles.scss'


const CollectionItem = ({item, addItemToCart}) => {
    const {imageUrl, price, name} = item

    const handleClick = () => {
        const itemData = {
            name:name,
            imageUrl:imageUrl,
            price:price
        }
        addItemToCart(itemData)
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
                   <span className="price">{price}</span> 
               </div> 
               <CustomButton onClick={handleClick} inverted> Add to cart </CustomButton>
        </div>
    )
}

export default CollectionItem
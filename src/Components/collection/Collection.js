import React from 'react'
import CollectionItem from '../collection-item/CollectionItem'
import './Collection.styles.scss'


const Collection = ({title, items, addItemToCart}) => {

    const renderCollectionItems = () => {
        return items.filter((item,idx) => idx < 4).map((item) => <CollectionItem key={item.id} item={item} addItemToCart={addItemToCart} />)
    }

    return (
        <div className="collection">
            <h1 className="title">{title}</h1>
            <div className="preview">
                {renderCollectionItems()}
            </div>
        </div>
    )
}

export default Collection
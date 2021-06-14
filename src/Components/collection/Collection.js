import React from 'react'

import './Collection.styles.scss'


const Collection = ({title, items}) => {

    const renderCollectionItems = () => {
        return items.map((item) => {
           return <div key={item.id}>{item.name}</div> // return <CollectionItem />
        })
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
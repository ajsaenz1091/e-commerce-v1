import React, {useState, useEffect} from 'react';

import Collection from '../../Components/collection/Collection'

const Shop = ({collections, addItemToCart}) => {

    // const [collections, setCollection] = useState([])
    // const [url, setUrl] = useState('http://localhost:3001/shopData')

    // useEffect(() => {
    //   fetch(url)
    //   .then(res => res.json())
    //   .then(data => setCollection(data))
    // }, [url])

    const renderCollections = () => {
      return collections.map(collection => <Collection key={collections.id} {...collection} addItemToCart={addItemToCart}/>)
    }

    return (
        <div className='shop-page'>
          {renderCollections()}
        </div>
    )
}

export default Shop;
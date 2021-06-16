import React, {useState, useEffect} from 'react';

import Collection from '../../Components/collection/Collection'

const Shop = ({collections, addItemToCart, match}) => {

  const [collecId, setCollecId] = useState(0)

    // const [collections, setCollection] = useState([])
    // const [url, setUrl] = useState('http://localhost:3001/shopData')

    // useEffect(() => {
    //   fetch(url)
    //   .then(res => res.json())
    //   .then(data => setCollection(data))
    // }, [url])

    const renderCollections = () => {
      return collections.map(collection => <Collection key={collection.id} {...collection} addItemToCart={addItemToCart}/>)
    }

    const renderCollection = () => {
      return collections.filter(collection => {
        return collection.id === 1
      }).map(collection => <Collection key={collection.id} {...collection} addItemToCart={addItemToCart}/>)
    }

    return (
        <div className='shop-page'>
          {renderCollections()}
            {/*{renderCollection()}*/}
        </div>
    )
}

export default Shop;
import React, {useState, useEffect} from 'react';

import Collection from '../../Components/collection/Collection'

const Shop = ({collections, addItemToCart, collecId, handleSearch, searchTerm, cartId}) => {

    // const [collections, setCollection] = useState([])
    // const [url, setUrl] = useState('http://localhost:3001/shopData')

    // useEffect(() => {
    //   fetch(url)
    //   .then(res => res.json())
    //   .then(data => setCollection(data))
    // }, [url])

    // const renderCollections = () => {
    //   return collections.map(collection => <Collection key={collection.id} cartId={cartId} {...collection} addItemToCart={addItemToCart}/>)
    // }

    const renderCollection = () => {
      return collections.filter(collection => {
        return collection.id === collecId
      }).map(collection => <Collection cartId={cartId} key={collection.id} {...collection} addItemToCart={addItemToCart}/>)
    }

    const handleChange = (e) => {
      
      handleSearch(e.target.value)
    }

    return (
        <div className='shop-page'>
          <input type="text" onChange={handleChange} value={searchTerm} />
          {/*renderCollections()*/}
          {renderCollection()}
        </div>
    )
}

export default Shop;
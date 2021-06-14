import React from 'react';
import Directory from '../Components/Directory/Directory'
import { Route, Link } from 'react-router-dom';
import './Home.styles.scss'

const Home = () => {

    return (
        <div className='homepage'>
            <Link to='/shop'>Shop</Link>
            <Link to='/cart'>Cart</Link>
            <Directory />
        </div>
    )
}

export default Home;
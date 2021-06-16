import React, {useState, useEffect } from 'react';
import Directory from '../../Components/directory/Directory'
import './Home.styles.scss'

const Home = () => {

    return (
        <div className='homepage'>
            <Directory />
        </div>
    )
}

export default Home;
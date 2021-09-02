import React from 'react'
import {Link} from 'react-router-dom'

import {auth} from '../../firebase/firebase.utils'

import { ReactComponent as Logo } from '../../assets/crown.svg'

import CartIcon from '../cart-icon/CartIcon'

import './Header.styles.scss'

const Header = ({itemCount, currentUser, setCurrentUser}) => {

    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo"/>
            </Link>
            <div className="options">
                {
                    currentUser 
                    ?<div className='option' onClick={() => {
                        setCurrentUser(null)
                        auth.signOut()
                
                    }}>SIGN OUT</div>
                    :<Link className='option' to='/signup'>SIGN IN</Link>
                }
                <Link to="/shop" className="option">
                    SHOP
                </Link>
                <Link to="/cart" className="option">
                    Cart
                </Link>
                <CartIcon itemCount={itemCount}/>
            </div>
        </div>
    )
}

export default Header
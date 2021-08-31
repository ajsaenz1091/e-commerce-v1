import React from 'react'
import {Link} from 'react-router-dom'

import { ReactComponent as Logo } from '../../assets/crown.svg'

import CartIcon from '../cart-icon/CartIcon'

import './Header.styles.scss'

const Header = ({itemCount}) => {

    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo"/>
            </Link>
            <div className="options">
                <Link to="/signup" className="option">
                    SIGN UP
                </Link>
                <Link to="/login" className="option">
                    LOGIN
                </Link>
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
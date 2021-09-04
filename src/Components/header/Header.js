import React from 'react'
import {Link} from 'react-router-dom'

import {auth} from '../../firebase/firebase.utils'

import { ReactComponent as Logo } from '../../assets/crown.svg'

import CartIcon from '../cart-icon/CartIcon'

import './Header.styles.scss'

const Header = ({itemCount, currentUser, setCurrentUser}) => {

    return (
        <div className="header">
            <Link className="logo-container" to="/home">
                <Logo className="logo"/>
            </Link>
            <div className="options">
                {
                    currentUser 
                    ?<Link className='option' to='/logout'>SIGN OUT</Link>
                    :<Link className='option' to='/'>SIGN IN</Link>
                }
                <Link to="/shop" className="option">
                    SHOP
                </Link>
                <Link to="/cart" className="option">
                    {currentUser ? <h4>{currentUser.username}'s Cart</h4> : <p>Cart</p>}
                </Link>
                <CartIcon itemCount={itemCount}/>
            </div>
        </div>
    )
}

export default Header
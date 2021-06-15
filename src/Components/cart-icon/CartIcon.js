import React from 'react'

import { ReactComponent as ShopIcon } from '../../assets/shopping-bag.svg'

import './CartIcon.styles.scss'


const CartIcon = (props) => {

    return (
        <div className='cart-icon'>
            <ShopIcon className='shopping-icon'/>
            <span className="item-count">0</span>
        </div>
    )
}

export default CartIcon
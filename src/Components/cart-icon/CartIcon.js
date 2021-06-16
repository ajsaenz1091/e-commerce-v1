import React from 'react'

import { ReactComponent as ShopIcon } from '../../assets/shopping-bag.svg'

import './CartIcon.styles.scss'


const CartIcon = ({itemCount}) => {

    return (
        <div className='cart-icon'>
            <ShopIcon className='shopping-icon'/>
            <span className="item-count">{itemCount}</span>
        </div>
    )
}

export default CartIcon
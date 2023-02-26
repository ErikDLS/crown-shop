import { useContext } from 'react'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import { CartContext } from '../../context/cart.context'

import './cart-icon.styles.scss'

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)

    return (
        <div className='cart-icon-cont' onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon'></ShoppingIcon>
            <span className='item-count'>{cartCount}</span>
        </div>
    )
}

export default CartIcon;
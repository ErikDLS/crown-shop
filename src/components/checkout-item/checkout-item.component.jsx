import { useContext } from 'react';

import { CartContext } from '../../context/cart.context';

import './checkout-item.styles.scss'

const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;

    const { addItemToCart, removeItemFromCart, deleteItemFromCart } = useContext(CartContext);

    const addItem = () => addItemToCart(cartItem);

    const removeItem = () => removeItemFromCart(cartItem);

    const deleteItem = () => deleteItemFromCart(cartItem);

    return (
        <div className='checkout-item-cont'>
            <div className='img-cont'>
                <img src={imageUrl} alt={name}></img>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={removeItem}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={addItem}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={deleteItem}>&#10005;</div>
        </div>
    )
}

export default CheckoutItem
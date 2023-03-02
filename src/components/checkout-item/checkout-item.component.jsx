import { useContext } from 'react';

import { CartContext } from '../../context/cart.context';

import { CheckoutItemContainer, ImgContainer, Image, Name, Quantity, Price, Arrow, Value, RemoveButton } from './checkout-item.styles';

const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;

    const { addItemToCart, removeItemFromCart, deleteItemFromCart } = useContext(CartContext);

    const addItem = () => addItemToCart(cartItem);

    const removeItem = () => removeItemFromCart(cartItem);

    const deleteItem = () => deleteItemFromCart(cartItem);

    return (
        <CheckoutItemContainer>
            <ImgContainer>
                <Image src={imageUrl} alt={name}></Image>
            </ImgContainer>
            <Name>{name}</Name>
            <Quantity>
                <Arrow onClick={removeItem}>&#10094;</Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={addItem}>&#10095;</Arrow>
            </Quantity>
            <Price>US$ {price}</Price>
            <RemoveButton onClick={deleteItem}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )
}

export default CheckoutItem
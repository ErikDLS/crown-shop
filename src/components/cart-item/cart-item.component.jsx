import { CartItemContainer, Image, ItemDetails, Name } from "./cart-item.styles";

const CartItem = ({cartItem}) => {

    const {name, imageUrl, price, quantity} = cartItem;

    return (
        <CartItemContainer>
            <Image src={imageUrl} alt={`${name}`}></Image>
            <ItemDetails>
                <Name>{name}</Name>
                <span className='price'>{quantity} x ${price}</span>
            </ItemDetails>
        </CartItemContainer>
    )
}

export default CartItem;
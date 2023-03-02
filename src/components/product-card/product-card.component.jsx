import { useContext } from 'react';

import { CartContext } from '../../context/cart.context';

import { ProductCardContainer, Footer, Name, Price, Sup  } from './product-card.styles';

import Button, {Button_Types_Classes} from '../button/button.component'

const ProductCard = ({product}) => {
    const {name, price, imageUrl} = product;

    const { addItemToCart } = useContext(CartContext);

    const addProductToCart = () => addItemToCart(product);

    return (
    <ProductCardContainer>
        <img src={imageUrl} alt={`${name}`}></img>
        <Footer>
            <Name>{name}</Name>
            <Price><Sup>US$</Sup>{price}<Sup>00</Sup></Price>
        </Footer>
        <Button buttonType={Button_Types_Classes.inverted} onClick={addProductToCart}>Add to Cart</Button>
    </ProductCardContainer>
    )
}

export default ProductCard;
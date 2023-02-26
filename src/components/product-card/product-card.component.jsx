import './product-card.styles.scss'

import Button from '../button/button.component'

const ProductCard = ({product}) => {
    const {name, price, imageUrl} = product;

    return (
    <div className='product-card-cont'>
        <img src={imageUrl} alt={`${name}`}></img>
        <div className='footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <Button buttonType={'inverted'}>Add to Cart</Button>
    </div>
    )
}

export default ProductCard;
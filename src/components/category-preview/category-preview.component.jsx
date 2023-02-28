import ProductCard from '../product-card/product-card.component'

import './category-preview.styles.scss'

const CategoryPreview = ({ title, products }) => {
    return (
        <div className='category-preview-cont'>
            <h2>
                <span className='title'>{title.toUpperCase()}</span>
            </h2>
            <div className='preview'>
                {
                    products
                        .filter((_, index) => index < 4 )
                        .map((product) =>
                            <ProductCard key={product.id} product={product}></ProductCard>
                        )
                }
            </div>
        </div>
    )
}

export default CategoryPreview;
import { useContext, useState, useEffect } from 'react';

import { useParams } from 'react-router-dom'

import { CategoriesContext } from '../../context/categories.context';

import ProductCard from '../../components/product-card/product-card.component';

import './category.styles.scss'

const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);

    const [products, setProducts] = useState(categoriesMap[categor]);

    useEffect(()=>{
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap])

    return(
        <div className='category-cont'>
            {
                products && products.map((product)=> <ProductCard key={product.id} product={product}></ProductCard>)
            }
        </div>
    )
}

export default Category;
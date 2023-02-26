import { createContext, useState } from "react";

import prods from '../shop-data.json'

export const ProductContext = createContext({
    products: [],
    setProducts: () => null
});

export const ProductsProvider = ({children}) => {

    const [products, setProducts] = useState(prods);
    const value = {products};

    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}

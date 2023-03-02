import { createContext, useState, useEffect } from "react";

/* import SHOP_DATA from '../shop-data.js' */

import { getCategoriesAndDocuments, /* addCollectionAndDocuments */ } from "../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
    categoriesMap: [],
    setCategoriesMap: () => null
});

export const CategoriesProvider = ({children}) => {

    /* useEffect(()=>{
        addCollectionAndDocuments('categories', SHOP_DATA);
    },[]) */

    useEffect(()=>{
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            /* console.log(categoryMap) */
            setCategoriesMap(categoryMap);
        }
        getCategoriesMap();
    },[])

    const [categoriesMap, setCategoriesMap] = useState({});
    
    const value = {categoriesMap};

    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}

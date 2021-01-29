import { useState, useCallback, useEffect } from 'react';


export const useNewhook = (url) => {

    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    const getProducts = useCallback(async () => {
        const response = await fetch(url);
        const products = await response.json();
        setProducts(products);
        setLoading(false);
    }, [url]);

    useEffect(() => {
        getProducts();
    }, [url, getProducts]);

    return {
        loading, products
    };
};
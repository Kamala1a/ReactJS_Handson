import React, { useEffect } from 'react'
import { useNewhook } from '../11-customHooks/useNewhook';

import Product from './Product'


const url = 'https://course-api.com/react-prop-types-example'

const Index = () => {
    const { products } = useNewhook(url);
    return (
        <div>
            <h2>Products</h2>
            <section className='products'>
                {
                    products.map((product) => {
                        return (
                            <Product
                                {...product}
                            />
                        )
                    })
                }
            </section>
        </div>
    )
}

export default Index

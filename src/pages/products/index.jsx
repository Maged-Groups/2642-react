import ProductCard from '@/components/ProductCard'
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import ProductCardSkeliton from '@/components/ProductCardSkeliton'

function Products() {


    const [products, setProducts] = useState(null);

    const { items } = useSelector(store => store.cartSlice)

    useEffect(() => {
        const get_products = async () => {

            const res = await fetch('https://dummyjson.com/products')

            const data = await res.json();

            setTimeout(() => setProducts(data.products), 2000)

            // console.log(products)
        }


        get_products()
    }, [])


    if (products === null) return (
        <div className='flex flex-wrap justify-center gap-2 mt-2 mb-2'>
            {
                [...Array(10)].map((_, i) => <ProductCardSkeliton key={i} />)


            }
        </div>
    )

    return (
        <div className='flex flex-wrap justify-center gap-2 mt-2 mb-2'>
            {
                products.map((product, i) => <ProductCard key={product.id} product={product} cart_items={items} />)
            }
        </div>
    );
}

export default Products;

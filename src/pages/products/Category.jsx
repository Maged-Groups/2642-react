import { useState } from 'react'
import { useParams } from 'react-router-dom'
import LoadingContainer from '../../components/LoadingContainer'
import { useEffect } from 'react'
import ProductCard from '../../components/ProductCard'
import { useDispatch } from 'react-redux'
import { rdx_set_is_loading } from '@/redux/settingsSlice';

export default function Category() {
    const [products, setProducts] = useState(null)

    const { cat_slug } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        const get_category = async () => {


            try {
                // // console.log('onLine', window.navigator.onLine);
                dispatch(rdx_set_is_loading(true));

                // throw new Error;

                const res = await fetch(`https://dummyjson.com/products/category/${cat_slug}`);


                // // console.log(res)

                const { products } = await res.json();
                setProducts(products);


            } catch (error) {
                // console.log(error.message)


                if (window.navigator.onLine === false) {
                    setProducts('You are offline, please reconnect to the Internet!!!')
                }


            } finally {
                dispatch(rdx_set_is_loading(false));
                // console.log('I will be executed on both cases')
            }




        }

        get_category();
    }, [cat_slug])

  


    if (products === null) return <p>,,,,,,,, loading ,,,,,,,,,</p>

    if (typeof (products) === 'string') return <p className='p-5 bg-yellow-200 text-yellow-950 font-extrabold text-2xl rounded-md m-auto max-w-96 text-center'>{products}</p>



    return (
        <div>
            <h2>Category: {cat_slug}</h2>

            <div className='p-3'>
                {
                    products.map(product => <ProductCard key={product.id} product={product} cart_items={[]} />)
                }
            </div>

        </div>
    )
}

import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom'

import FullScreenLoading from '@/components/FullScreenLoading'

export default function ShowProduct() {
  const [product, setProduct] = useState(null);
  // null => not yet
  // false => not found
  // {} => found

  const { id } = useParams();

  const get_product = async () => {
    // console.log('get_product function fired')

    const res = await fetch(`https://dummyjson.com/products/${id}`)

    // console.log('res', res)

    if (!res.ok) return setProduct(false);

    setProduct(await res.json());

  }

  useEffect(() => {
    // console.log('useEffect fired')

    get_product();

    return () => { }

  }, [id]);

  if (product === null) return <FullScreenLoading />

  if (product === false) return <div>Product not found</div>

  return (
    <div>
      <h1>Show single product</h1>

      <h2>Product: {product.title}</h2>
      <img src={product?.thumbnail} alt="" />
      <div className="flex gap-3">

        <Link to={`/products/${+id + 1}`}>Next</Link>

        <span>{id}</span>

        {
          id > 1 && <Link to={`/products/${+id - 1}`}>Prev</Link>
        }
      </div>

    </div>
  )
}

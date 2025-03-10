import { Link } from 'react-router-dom';
import { AddToCart } from './CartBtns';

export default function ProductCard({ product, cart_items }) {

    return (
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md" >
            <Link to={`/products/${product.id}`}>
                <img className="p-8 rounded-t-lg" src={product.thumbnail} alt="product image" />
            </Link>
            <div className="px-5 pb-5">
                <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900">{product.title}</h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                        {[...Array(5)].map((_, index) => (
                            <svg
                                key={index}
                                className={`w-4 h-4 ${index < Math.ceil(product.rating) ? 'text-yellow-300' : 'text-gray-200'}`}
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 22 20"
                            >
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                        ))}
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm ms-3">
                        {product.rating}
                    </span>
                    {/* <div className='flex'>
                {[...Array(Math.ceil(product.rating))].map((_, index) => (
                    <svg
                        key={index}
                        className={`w-4 h-4 ${index < Math.ceil(product.rating) ? 'text-yellow-300' : 'text-gray-200'}`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                ))}
            </div> */}
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900">${product.price}</span>
                    <AddToCart cart_items={cart_items} product={product} />
                </div>
            </div>
        </div>
    )
}

import { useSelector } from 'react-redux';
import { AddToCart } from '../components/CartBtns';

function Cart() {
    const cart_items = useSelector(store => store.cartSlice.items)



    const totalPrice = (cart_items.reduce((total, product) => total + product.price * product.quantity, 0)).toFixed(2);


    return (
        <>
            {cart_items.length === 0
                ?
                <div className='text-center text-2xl flex justify-center items-center m-6'><h1>Your cart is empty</h1></div>
                :
                <>
                    <h2 className='text-2xl text-center font-bold m-3'>Total Price : ${totalPrice}</h2>
                    <div className='flex flex-wrap justify-center gap-2 mt-2 mb-2'>
                        {cart_items.map((product, i) => (
                            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md" key={i}>
                                <a href="#">
                                    <img className="p-8 rounded-t-lg" src={product.thumbnail} alt="product image" />
                                </a>
                                <div className="px-5 pb-5">
                                    <a href="#">
                                        <h5 className="text-xl font-semibold tracking-tight text-gray-900">{product.title}</h5>
                                    </a>
                                    <div className="flex items-center mt-2.5 mb-5">
                                        <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                            {Array.from({ length: 5 }).map((_, index) => (
                                                <svg
                                                    key={index}
                                                    className={`w-4 h-4 ${index < Math.round(product.rating) ? 'text-yellow-300' : 'text-gray-200'}`}
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
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-3xl font-bold text-gray-900">${product.price}</span>
                                        <AddToCart product={product} cart_items={cart_items} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            }
        </>
    )
}

export default Cart
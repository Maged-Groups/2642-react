import { rdx_add_to_cart, rdx_remove_from_cart } from '../redux/cartSlice';
import { useDispatch, useSelector } from 'react-redux';


export function RemoveFromCart({ id }) {
    const dispatch = useDispatch();

    return (
        <button className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 cursor-pointer font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={() => dispatch(rdx_remove_from_cart(id))}>Remove from the cart</button>
    )
}

export function AddToCart({ product, cart_items }) {
    // // console.log('product', product)
    // // console.log('cart_items', cart_items)

    const existingItem = cart_items.find(item => item.id === product.id)

    const qty = existingItem?.quantity || 0;

    // console.log('existingItem', existingItem)
    // console.log('qty', qty)


    const dispatch = useDispatch();


    if (qty > 0) {
        return (
            <div className='flex gap-4 items-center'>
                <a className={`${styles.btn} ${styles.plus}`} onClick={() => dispatch(rdx_add_to_cart(product))}>+</a>
                <span>{qty}</span>
                <a className={`${styles.btn} ${styles.minus}`} onClick={() => dispatch(rdx_remove_from_cart(product.id))}>-</a>
            </div>
        )
    }



    return (
        <a className={`${styles.add} ${styles.btn}`} onClick={() => dispatch(rdx_add_to_cart(product))}>Add to cart</a>
    )
}


const styles = {
    btn: "text-white focus:ring-4 focus:outline-none cursor-pointer font-medium rounded-lg text-sm text-center flex items-center justify-center",
    add: "bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 px-5 py-2.5",
    plus: "bg-green-700 hover:bg-green-800 focus:ring-green-300 w-9 h-9 text-xl p-2 ",
    minus: "bg-red-700 hover:bg-red-800 focus:ring-red-300 w-9 h-9 text-xl p-2",
    
}


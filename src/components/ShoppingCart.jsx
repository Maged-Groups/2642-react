import React from 'react'

function ShoppingCart() {

    const handle_remove_item = (id) => {
        console.log(`Remove item with id: ${id}`)
    }

    const handle_price_clicked = (e) => {
        console.log(e.toLowerCase());
    }

    return (
        <div>
            {/* create a shopping cart page with tailwindcss and typescript         */}
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold">Shopping Cart</h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
                    {/* product 1 */}
                    <div className="border p-4 rounded-lg">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-bold">Product 1</h2>
                            <div className="flex items-center">
                                <span className="text-lg font-semibold">$20</span>
                                <button className="ml-2 bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded-lg">Remove</button>
                            </div>
                        </div>
                    </div>
                    {/* product 2 */}
                    <div className="border p-4 rounded-lg">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-bold">Product 2</h2>
                            <div className="flex items-center">
                                <span className="text-lg font-semibold">$30</span>
                                <button className="ml-2 bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded-lg">Remove</button>
                            </div>
                        </div>
                    </div>
                    {/* product 3 */}
                    <div className="border p-4 rounded-lg">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-bold">Product 3</h2>
                            <div className="flex items-center">
                                <span onClick={handle_price_clicked} className="text-lg font-semibold">$40</span>
                                <button onClick={() => handle_remove_item(3)} className="ml-2 bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded-lg">Remove</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-bold">Total</h2>
                        <span className="text-lg font-semibold">$90</span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ShoppingCart
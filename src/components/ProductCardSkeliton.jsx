export default function ProductCardSkeliton() {
    return (
        <div className="animate-pulse w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md" >

            <div className='bg-gray-200 w-full h-64'></div>
            <div className="px-5 pb-5">
                <a href="#">
                    <h5 className=" bg-gray-200 w-9-12 h-4 my-4 rounded-full"></h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                        {[...Array(5)].map((_, index) => (
                            <svg
                                key={index}
                                className={`w-4 h-4 text-gray-200`}
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 22 20"
                            >
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                        ))}
                    </div>
                    <span className="bg-gray-200 px-5 py-2.5 rounded-sm ms-3"></span>

                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900"></span>
                    <div className='w-24 h-8 bg-gray-200 rounded'></div>
                </div>
            </div>
        </div>
    )
}

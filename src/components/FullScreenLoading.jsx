export default function FullScreenLoading() {
  console.log('FullScreenLoading rendered')
  return (
    <div className='fixed inset-0  z-50 bg-black/70 flex justify-center items-center'>
        <div className='w-7 h-9 border-2 rounded-full border-x-0 animate-spin absolute border-yellow-500'></div>
        <div className='w-16 h-16 border-2 rounded-full border-x-transparent animate-[spin_5s_infinite_linear_reverse] absolute'></div>
    </div>
  )
}

import React from 'react'
import { FaSignInAlt } from 'react-icons/fa'

// Redux
import { rdx_show_modal } from '../redux/appSlice'
import { useDispatch } from 'react-redux'

export default function ShouldLogin({ msg }) {

    const dispatch = useDispatch();

    return (
        <div onClick={() => dispatch(rdx_show_modal('login'))} className="p-4 flex justify-end">
            <div className=" text-sky-600 text-2xl px-3 py-6 text-end font-extrabold bg-gray-100 rounded-md shadow-md flex items-center justify-end gap-3">
                Login to {msg}
                <FaSignInAlt size={40} />
            </div>
        </div>
    )
}

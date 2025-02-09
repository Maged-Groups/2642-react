import { memo } from 'react'
// Icons
import { FaUser, FaAsterisk } from 'react-icons/fa6'

import logo from '@/assets/imgs/logo.png'

// redux
import { useDispatch } from 'react-redux';
import { rdx_show_modal } from '@/redux/appSlice';
import { rdx_set_is_loading } from '@/redux/settingsSlice';

// react-toastify
import { toast } from 'react-toastify';
import { rdx_login } from '@/redux/userSlice';
import { useState } from 'react';


const Login = () => {

    const [username, setUserrname] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);


    const dispatch = useDispatch();

    // Register function
    const handle_login = async () => {

        if (username == '' || password == '')
            return toast.error('Username and password are required');

        dispatch(rdx_set_is_loading(true));

        const jsonData = JSON.stringify({ username, password })
        console.log(jsonData)


        const api = 'https://dummyjson.com/auth/login';

        const init = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: jsonData
        }

        // const res = await fetch(api, init);

        // const data = await res.json();


        const data = await fetch(api, init).then(res => res.json()).then(data => data)

        if (data.id) {
            // Correct username and password

            dispatch(rdx_login(data));
            dispatch(rdx_show_modal(null));


            const jsonData = JSON.stringify(data);

            // Save in storage
            if (remember) {
                // Local storage
                localStorage.user = jsonData;
                
            } else {
                // session storage
                sessionStorage.user = jsonData;
            }

        } else {
            // Incorrect username or password
            toast.error(data.message, {
                closeOnClick: true,
                theme: 'light'
            });

            // username_ref.current.value = username
        }
        dispatch(rdx_set_is_loading(false));
    }

    return (
        <div className="fixed inset-0 p-12 bg-gray-950/90 flex justify-center z-50">

            <div className='bg-gray-100 rounded-md p-12 max-w-2xl grid'>
                <div className="flex justify-center">
                    <div className="w-fit border p-4 rounded-full">
                        <img src={logo} width='64' />
                    </div>
                </div>

                <div className='overflow-auto p-4'>
                    <div className="mb-5">
                        <label htmlFor="username" className="flex gap-2 items-center mb-3  text-base font-medium text-[#07074D]">
                            Username
                        </label>
                        <div className='rounded-md border border-[#e0e0e0] bg-white py-3 px-4 flex items-center gap-3'>
                            <FaUser color='#2e34aa' size={20} />
                            <input onChange={e => setUserrname(e.target.value)} value={username} type="text" name="username" id="username" placeholder="Full Name"
                                className="w-full text-base font-medium text-[#6B7280] outline-none" />
                        </div>
                    </div>

                    <div className="mb-5">
                        <label htmlFor="password" className="flex gap-2 items-center mb-3  text-base font-medium text-[#07074D]">
                            Password
                        </label>
                        <div className='rounded-md border border-[#e0e0e0] bg-white py-3 px-4 flex items-center gap-3'>
                            <FaAsterisk color='#2e34aa' size={20} />
                            <input onChange={e => setPassword(e.target.value)} value={password} type="text" name="password" id="password" placeholder="*********"
                                className="w-full text-base font-medium text-[#6B7280] outline-none" />
                        </div>
                    </div>


                    <div>
                        <label className='select-none' >
                            <input type="checkbox" className='w-4 h-4' checked={remember} onChange={() => setRemember(prevState => !prevState)} />
                            Remember Me
                        </label>
                    </div>

                    <div className="flex justify-center gap-3 mb-3">
                        <button type='button' onClick={handle_login} className='focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-900 w-6/12' >Login</button>
                        <button className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 w-6/12' onClick={() => dispatch(rdx_show_modal(null))}>Cancel</button>
                    </div>

                    <div>
                        Do not have account? <span className='text-sky-800 font-black cursor-pointer' onClick={() => dispatch(rdx_show_modal('register'))}>Create Account</span>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default memo(Login);

import TopNav from '@/layout/TopNav';

import Pages from '@/pages';

// components
import ModalContainer from '@/components/ModalContainer'
import LoadingContainer from '@/components/LoadingContainer'

// React Toastify
import { ToastContainer } from 'react-toastify';


// redux
import { useDispatch } from 'react-redux';
import { rdx_login } from '@/redux/userSlice'
import { useState } from 'react';
import { useEffect } from 'react';

const App = () => {
    const [isOnline, setIsOnline] = useState(window.navigator.onLine)

    const dispatch = useDispatch();


    useEffect(() => {

        const change_online_state = (state) => {
            console.log('state', state)
            setIsOnline(state)
        }

        window.addEventListener('online', () => change_online_state(true));
        window.addEventListener('offline', () => change_online_state(false));

        // return () => {
        //     window.removeEventListener('online', change_online_state);
        //     window.removeEventListener('offline', change_online_state);
        // }

    }, [])

    const jsonUserData = sessionStorage.user || localStorage.user;


    // console.log('jsonUserData', jsonUserData)

    if (jsonUserData) {

        const userData = JSON.parse(jsonUserData);

        dispatch(rdx_login(userData))

    }

    // console.log('App rendered')

    return (
        <>
            <TopNav />
            <h1>Main Title</h1>
            <ModalContainer />

            <h2>Sub-Title</h2>
            <LoadingContainer />

            {/* Routing */}
            <Pages />

            <ToastContainer theme='dark' rtl={true} />

            {
                isOnline ? <p>ONLINE</p> : <p>OFFLINE</p>
            }

        </>
    )
}

export default App;

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

const App = () => {

    const dispatch = useDispatch();


    const jsonUserData = sessionStorage.user || localStorage.user;


    console.log('jsonUserData', jsonUserData)

    if (jsonUserData) {

        const userData = JSON.parse(jsonUserData);

        dispatch(rdx_login(userData))

    }

    console.log('App rendered')

    return (
        <>
            <TopNav />
            <h1>Title</h1>
            <ModalContainer />

            <LoadingContainer />

            {/* Routing */}
            <Pages />

            <ToastContainer theme='dark' rtl={true} />


        </>
    )
}

export default App;

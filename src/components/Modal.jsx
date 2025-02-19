import { useSelector } from "react-redux";

// Modals
import Register from '@/components/auth/Register';
import Login from '@/components/auth/Login';

const Modal = () => {

    // console.log('Modal rendered')

    const { show_modal } = useSelector(store => store.appSlice)


    const ActiveModal = () => {

        switch (show_modal) {
            case 'register':
                return <Register />

            case 'login':
                return <Login />

            case 'forget_password':
                return

            case 'reset_password':
                return

            default:
                return null
        }
    }

    return (
        <div className="fixed inset-0 p-12 bg-gray-950/90 flex justify-center z-40">
            <ActiveModal />
        </div>
    )
}

export default  Modal;

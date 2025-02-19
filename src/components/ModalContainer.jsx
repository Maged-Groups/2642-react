// components
import Modal from '@/components/Modal';

// redux
import { useSelector } from 'react-redux'

export default function ModalContainer() {


    // console.log('ModalContainer rendered')
    const { show_modal } = useSelector(store => store.appSlice)

    return (
        <>
            {show_modal && <Modal />}
        </>
    )
}
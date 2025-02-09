import FullScreenLoading from '@/components/FullScreenLoading'
import { useSelector } from 'react-redux'

export default function LoadingContainer() {

    const { is_loading } = useSelector(store => store.settingsSlice)

    return (
        <>
            {is_loading && <FullScreenLoading />}
        </>
    )
}

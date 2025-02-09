import logo from '@/assets/imgs/logo.png';
import { styles } from '@/assets/tailwind/TopNav';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { rdx_show_modal } from '@/redux/appSlice'

// React Router DOM
import { Link, useHref, useNavigate } from 'react-router-dom'
import { FaCartShopping } from 'react-icons/fa6';
import { BsCursor } from 'react-icons/bs';
import { BiPointer } from 'react-icons/bi';
import { rdx_logout } from '../redux/userSlice';


export default function TopNav() {

    console.log('TopNav rendered')

    const dispatch = useDispatch();

    const navigate = useNavigate();
    
    const { stat_loggedin, stat_user } = useSelector(store => store.userSlice);
    const { items } = useSelector(store => store.cartSlice)

    console.log(stat_loggedin)

    console.log(useHref())


    return (
        <nav className={styles.nav}>

            <div className={styles.top}>


                {/* Branding */}
                <div className={styles.branding}>
                    <img src={logo} alt="" width={64} />
                </div>


                {/* Account */}
                <div className={styles.account}>

                    {
                        stat_loggedin
                            ?
                            <div className='grid gap-1'>
                                <div className='flex gap-1 items-center'>
                                    <img src={stat_user.image} alt={stat_user.firstName} width='24' />
                                    <small>{stat_user.firstName}</small>
                                </div>
                                <button className={`${styles.btn} ${styles.logout}`} onClick={() => dispatch(rdx_logout(navigate))}>Logout</button>
                            </div>
                            :
                            <>
                                <button className={`${styles.btn} ${styles.login}`} onClick={() => dispatch(rdx_show_modal('login'))} >Login</button>
                                <button className={`${styles.btn} ${styles.register}`} onClick={() => { dispatch(rdx_show_modal('register')) }}>Register</button>
                            </>
                    }
                </div>
            </div>

            <div className={styles.bottom}>
                {/* Links */}
                <div className={styles.links}>
                    <Link className={styles.link} to="/">Home</Link>
                    <Link className={styles.link} to="/about">About</Link>
                    <Link className={styles.link} to="/products">Products</Link>
                    <Link className={styles.link} to="/services">Services</Link>
                    {
                        stat_loggedin && <Link className={styles.link} to="/users">Users</Link>
                    }
                    <Link className={styles.link} to="/contacts">Contact us</Link>
                </div>
                <Link to="cart">
                    <div className='relative cursor-pointer'><FaCartShopping size={24} />
                        <div className="absolute inline-flex items-center justify-center w-5 h-5 text-[10px] font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
                            {items.length}
                        </div>
                    </div>
                </Link>
            </div>

        </nav>
    )
}


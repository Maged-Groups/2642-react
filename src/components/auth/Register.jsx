import { useState, useMemo } from 'react'
import PasswordValidator from './PasswordValidator';

// Icons
import { FaUser } from 'react-icons/fa6'
 
import logo from '@/assets/imgs/logo.png'

// redux
import { useDispatch } from 'react-redux';
import { rdx_show_modal } from '@/redux/appSlice';
 
// react-toastify
import { toast } from 'react-toastify';

const Register = () => {


    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');


    const dispatch = useDispatch();





    // handle_first_name_changed
    const handle_first_name_changed = e => setFname(e.target.value.toUpperCase());

    // handle_last_name_changed
    const handle_last_name_changed = e => setLname(e.target.value);

    const handle_email_changed = e => setEmail(e.target.value);

    // handle_password_changed
    const handle_password_changed = e => setPassword(e.target.value)

    // handle_password_confirmation_changed
    const handle_password_confirmation_changed = e => setPasswordConfirmation(e.target.value)


    // Register function
    const handle_register = () => {

        toast.error('لا يمكن تسجيل الحساب في الوقت الحالي', {
            closeOnClick: true,
            theme: 'light'
        })
    }

    // Validations
    // FirstNameValidator
    const firstNameValidator = useMemo(() => {


        if (fname.length === 0)
            return <p>Accept 3 - 15</p>

        if (fname.length >= 3 && fname.length <= 15)
            return <p className='text-green-600'>Accepted</p>

        return <p className='text-red-600'>Not Accepted</p>

    }, [fname])

    // LastNameValidator
    const lastNameValidator = useMemo(() => {


        if (lname.length === 0)
            return <p>Accept 3 - 15</p>

        if (/^[A-Z][a-z _-]{2,14}$/.test(lname))
            return <p className='text-green-600'>Accepted</p>

        return <p className='text-red-600'>Not Accepted</p>
    }, [lname]);

    // email validator
    const emailValidator = useMemo(() => {

        if (email.length === 0)
            return <p>Please write a valid email</p>

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
            return <p className='text-red-600'>Invalid email address</p>

        return <p className='text-green-600'>that's Ok</p>
    }, [email])


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
                        <label htmlFor="f_name" className="flex gap-2 items-center mb-3  text-base font-medium text-[#07074D]">
                            First Name
                        </label>
                        <div className='rounded-md border border-[#e0e0e0] bg-white py-3 px-4 flex items-center gap-3'>
                            <FaUser color='#2e34aa' size={20} />
                            <input value={fname} onChange={handle_first_name_changed} type="text" name="f_name" id="f_name" placeholder="Full Name"
                                className="w-full text-base font-medium text-[#6B7280] outline-none" />
                        </div>
                        <div className='flex justify-between'>
                            {firstNameValidator}
                            <p>{fname.length} / 15</p>
                        </div>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="l_name" className="mb-3 block text-base font-medium text-[#07074D]">
                            Last Name
                        </label>
                        <input value={lname} onChange={handle_last_name_changed} type="text" name="l_name" id="l_name" placeholder="Enter your phone number"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        <div className='flex justify-between'>
                            {lastNameValidator}
                            <p>{lname.length} / 15</p>
                        </div>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="email" className="mb-3 block text-base font-medium text-[#07074D]">
                            Email Address
                        </label>
                        <input value={email} onChange={handle_email_changed} type="email" name="email" id="email" placeholder="Enter your email"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        <div className='flex justify-between'>
                            {emailValidator}
                            {email.length}
                        </div>
                    </div>
                    <div className="mx-3 mb-5 flex flex-wrap">
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label htmlFor="pass" className="mb-3 block text-base font-medium text-[#07074D]">
                                    Password
                                </label>
                                <input onChange={handle_password_changed} type="passwordx" name="pass" id="pass" placeholder="Enter a Password"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                            </div>
                        </div>
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label htmlFor="confirm_pass" className="mb-3 block text-base font-medium text-[#07074D]">
                                    Confirm Password
                                </label>
                                <input onChange={handle_password_confirmation_changed} type="passwordx" name="confirm_pass" id="confirm_pass" placeholder="Enter a password"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                            </div>
                        </div>
                        <PasswordValidator password={password} passwordConfirmation={passwordConfirmation} />
                    </div>
                    <div className="flex justify-center gap-3 mb-3">
                        <button onClick={handle_register} className='focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-900 w-6/12' >Create Account</button>
                        <button className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 w-6/12' onClick={() => dispatch(rdx_show_modal(null))}>Cancel</button>
                    </div>

                    <div>
                         Have account? <span className='text-sky-800 font-black cursor-pointer' onClick={() => dispatch(rdx_show_modal('login'))}>Login</span>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Register;

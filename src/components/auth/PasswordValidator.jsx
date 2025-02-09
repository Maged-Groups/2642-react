import { memo } from "react"

function PasswordValidator({ password, passwordConfirmation }) {
 

    const Accepted = () => <span className='text-green-600'>✓</span>

    const NotAccepted = () => <span className='text-red-600'>〤</span>



    if (password.length === 0)
        return (
            <p className='text-gray-600'>
                Please Type a Strong Password
            </p>
        )

    return (
        <div className='grid gap-1'>
            <p className='flex gap-2'>
                {/(?=(.*[A-Z]){2})/.test(password) ? <Accepted /> : <NotAccepted />}
                <span>2 Uppercase letters</span>
            </p>

            <p className='flex gap-2'>
                {/(?=(.*[a-z]){2})/.test(password) ? <Accepted /> : <NotAccepted />}
                <span>2 Lowercase letters</span>
            </p>
            <p className='flex gap-2'>
                {/(?=(.*[\d]){2})/.test(password) ? <Accepted /> : <NotAccepted />}
                <span>2 Numbers</span>
            </p>
            <p className='flex gap-2'>
                {/(?=(.*[\W]){2})/.test(password) ? <Accepted /> : <NotAccepted />}
                <span>2 Special Characters</span>
            </p>
            <p className='flex gap-2'>
                {password.length >= 10 && password.length <= 20 ? <Accepted /> : <NotAccepted />}
                <span>Between 10 and 20</span>
            </p>
            <p className='flex gap-2'>
                {password === passwordConfirmation ? <Accepted /> : <NotAccepted />}
                <span>Passwords match</span>
            </p>
        </div>
    )
}

export default memo(PasswordValidator)
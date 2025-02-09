import Button from "../components/Button"

const Header = () => {
    return (
        <header className="bg-sky-700 text-sky-50 hover:bg-sky-50 hover:text-[#850] p-[13px] hover:p-3 transition-all">
            <h1 className="">The Company</h1>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            
            
            <Button cssClass='success' text='Subscribe' />
            <Button cssClass='info' text='Register' />
 
        </header>
    )
}


export default Header



// const props = {
//     children: 'Subscribe',
//     title: 'Please Click Here to Subscripe to Our Newsletter'
// }

// Button(props)
const Button = function ({ text, cssClass }) {

    // console.log('Button Component Rendered', text)


    return (
        <button className={cssClass} id="btn">{text}</button>
    )


}


export default Button
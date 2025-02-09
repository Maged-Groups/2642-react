export const InlineInput = ({ label, type, id }) => {
    return (

        <div>
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} />
        </div>
    )
}


export const FloatingInput = ({ }) => {
    return (
        <div>
            This is FloatingInput
        </div>
    )
}


export const IconInput = ({ }) => {
    return (
        <div>
            This is IconInput
        </div>
    )
}



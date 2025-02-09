const Card = ({ title, url ,children}) => {
    return (
        <div className="card">
            <div className="card-title">{title}</div>
            <div className="card-body">
                {children}
            </div>
            <div className="card-footer">
                <a href={url} target="_blank">View</a>
            </div>
        </div>
    )
}

export default Card
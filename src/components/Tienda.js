function Tienda(props)
{
    return (
        <div className="col-md-3">
            <div className="card mb-3">
                <img src={props.poster} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.year}</p>
                    <p className="card-text"><small className="text-muted">{props.description}</small></p>
                </div>
            </div>
        </div>
    )
}

export default Tienda;
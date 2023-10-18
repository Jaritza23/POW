function Favorito(props)
{
    return (
        <div>
            <div className="alert alert-info p-0" role="alert">
                <img width="50px" src={props.value.Poster} />
                <small>{props.value.Title}</small>
            </div>
        </div>
    );
}

export default Favorito;

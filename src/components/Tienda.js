import { useState } from "react";

function Tienda(props)
{
    const [verMas, setVerMas] = useState(false);

    let sectionVerMas = <button 
                        onClick={() => setVerMas(true)}
                        className="btn btn-success">Ver mas</button>
                   
    if(verMas)
    {
        sectionVerMas = <div>
            <button
                type="button"
                onClick={() => setVerMas(false)}
                className="btn-close float-end"
                aria-label="Close" />
                <hr />
                  {props.value.Plot}
                </div>
    }

    return (
        <div className="col-md-4">
            <div className="card mb-3">
                <img src={props.value.Poster} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.value.Name}</h5>
                    <p className="card-text">{props.value.Year}</p>
                    <p className="card-text"><small className="text-muted">{props.value.Description.substring(0, 20)}</small></p>
                    {sectionVerMas}

                    <button 
                        onClick={()=>props.fnAddFavorites(props.value)}
                        className="btn btn-warning">Favorito</button>
                   
                </div>
            </div>
        </div>
    )
}


export default Tienda;
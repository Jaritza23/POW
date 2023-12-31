import { useState } from "react";

function Numero(props) 
{

    function subir(cantidad){
        setNumero(numero + cantidad);
    }
    function bajar(cantidad){
        setNumero(numero - cantidad);
    }

    const [numero, setNumero] = useState(parseInt(props.valor));

    let renderNumero ="";
    if(numero >= 0)
    {
        renderNumero = <div class="alert alert-success" role="alert">
                            <h1>{numero}</h1>
                        </div>
    }
    else
    {
        renderNumero = <div class="alert alert-danger" role="alert">
                            <h1>{numero}</h1>
                        </div>
    }

    return (
        <div className="col-md-3">
            {renderNumero}
            <button onClick={(e) => subir(2)}>Incrementar</button>
            <button onClick={(e) => bajar(2)}>Decrementar</button>
        </div>
    );
}

export default Numero;
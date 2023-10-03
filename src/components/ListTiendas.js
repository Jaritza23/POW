import dataTienda from '../data/Tienda';
import Tienda from './Tienda';

function ListTiendas()
{
    let listTiendas = dataTienda.map(element => {
        return <Tienda 
                    name={element.Name}
                    year={element.Year}
                    description={element.Description}
                    poster={element.Poster}
                />    
    })

    return(
        <div className='row'>
        {listTiendas}
    </div>
    );
    
}

export default ListTiendas;
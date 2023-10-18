import Tienda from './Tienda';

function ListTiendas(props)
{
    let listTiendasRendered = props.elements.map(element => {
        return <Tienda 
                    key={element.Id}
                    value = {element}
                    fnAddFavorites={props.fnAddFavorites}
                />    
    })

    return(
        <div className='row'>
        {listTiendasRendered}
    </div>
    );
    
}

export default ListTiendas;
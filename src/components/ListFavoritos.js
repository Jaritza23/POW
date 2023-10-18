import Favorito from "./Favorito";

function ListFavoritos(props)
{
    let listaFavoritosRendered = props.elements.map(element => {
        return <Favorito value={element} />
    });

    return(
        <div>
            <h4>Lista Favoritos</h4>
            {listaFavoritosRendered}
        </div>
    )
}

export default ListFavoritos;
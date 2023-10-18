import Navegacion from './components/Navegacion';
import ListTiendas from './components/ListTiendas';
import dataTienda from './data/Tienda';
import { useState } from 'react';
import ListFavoritos from './components/ListFavoritos';

function App() {

  function addTiendaToFavorites(element)
  {
    console.log(element);
    let tempListTiendas = [...listTiendasFavoritas];
    tempListTiendas.push(element);
    setListTiendasFavoritas(tempListTiendas);
  }

  const [listTiendas, setListTiendas] = useState(dataTienda);
  const [listTiendasFavoritas, setListTiendasFavoritas] = useState([]);
  return (
    <div>
      <Navegacion />
      <div className='container'>
        <div className='row'>
          <div className='col-md-9'><br></br>
            <ListTiendas 
                elements={listTiendas}
                fnAddFavorites={addTiendaToFavorites} />
          </div>
          <div className='col-md-3'><br></br>
            <ListFavoritos 
            elements={listTiendasFavoritas}/>
          </div>
        </div>
      </div> 
    </div>
  );
}

export default App;

import Navegacion from './components/Navegacion';
import ListTiendas from './components/ListTiendas';
import dataTienda from './data/Tienda';
import { useState } from 'react';
import ListFavoritos from './components/ListFavoritos';
import CreateTienda from './components/CreateTienda';

function App() {

  function addTiendaToFavorites(element)
  {
    console.log(element);
    let tempListTiendas = [...listTiendasFavoritas];
    tempListTiendas.push(element);
    setListTiendasFavoritas(tempListTiendas);
  }

  function newTienda(element)
  {
    setListTiendas([...listTiendas, element]);
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
            <CreateTienda fnNewTienda={newTienda} />
            <ListFavoritos 
            elements={listTiendasFavoritas}/>
          </div>
        </div>
      </div> 
    </div>
  );
}

export default App;

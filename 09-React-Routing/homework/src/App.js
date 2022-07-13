import React, { useState } from 'react';
import './scss/variables.scss';
import Header from './containers/Header';
import Main from './containers/Main';
import Footer from './containers/footer';

function App() {
  /**Estado de cities */
  const [cities, setCities] = useState([]);
  /**renderizado de etiquetas */
  return (
    <div className='App'>
      <Header onSearch={onSearch} />
      <Main
        data={cities}
        onClose={onClose}
        onFilter={onFilter}
      />
      <Footer />
    </div>
  );
  /**funcion para eliminar una ciudad */
  function onClose(id) {
    setCities(oldCities => oldCities.filter(city => city.id !== id));
  }
  /**funcion para agregar ciudades */
  function onSearch(ciudad) {
    let appiKey = 'c1b4f70aa23cd79a5b3c72fdf3b51f5e';
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${appiKey}&units=metric`)
      .then(res => res.json())
      .then(rec => {
        console.log(rec);
        if (rec.cod >= 200 && rec.cod < 300) {
          setCities(oldCities => [...oldCities, rec]);
        } else {
          alert('No se encontró la ciudad intenta de nuevo');
        }
      });
  }
  /**filtrar una ciudad */
  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
  }
}

export default App;

// export default function App() {
//   return (
//     <div className="App">
//       { /* Tu código acá: */ }
//       <h1>Título</h1>
//     </div>
//   );
// }

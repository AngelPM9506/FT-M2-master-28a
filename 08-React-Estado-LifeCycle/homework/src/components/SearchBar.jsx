import { Component } from 'react';
import Alerta from './Alerta';

class SearchBar extends Component {
  state = {
    inputSearch: ''
  }
  setInputSearch(value) {
    this.setState({ inputSearch: value });
    //console.log(this.state.inputSearch);
  }
  btnSearch() {
    //console.log(this.props.onSearch);
    let city = this.state.inputSearch;
    if (city === '') {
      // let alertas = document.querySelector('.alertas');
      // let alerta = <Alerta tipo="error" message="Ingresa El nombre de una ciudad valida"/>;
      // console.log(alerta);
      // alertas.innerHTML = '';
      // alertas.innerHTML = alerta;
    } else {
      this.props.onSearch(city);
      this.setState({ inputSearch: '' });
      document.querySelector('#search').value = '';
    }
  }
  render() {
    return (
      <div className='search-bar'>
        {/* <p>{this.state.inputSearch}</p> */}
        <input
          type="search"
          name="search"
          id="search"
          placeholder='Ciudad...'
          onChange={(event => this.setInputSearch(event.target.value))} />
        <input type="submit" value="Agregar" onClick={(event => this.btnSearch())} />
      </div>
    );
  }
}

export default SearchBar;
/**
 * onClick={this.props.onSearch()}
 */
// export default function SearchBar(props) {
//   // acá va tu código
//   return <div>Search Bar Component</div>
// };
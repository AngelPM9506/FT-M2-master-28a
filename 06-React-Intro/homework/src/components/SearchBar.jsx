import { Component } from 'react';

class SearchBar extends Component {
  state = {
    inputSearch: ''
  }
  setInputSearch(value) {
    this.setState({ inputSearch: value });
    console.log(this.state.inputSearch);
  }
  btnSearch() {
    let city = this.state.inputSearch;
    if (city === '') {
      alert('Tienes que agregar una ciudad');
    } else {
      this.props.onSearch(city);
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
import React, { Component } from "react";
// import { connect } from "react-redux";
// import { Link } from 'react-router-dom';
import { removeMovieFavorite } from "../../actions";
import { connect } from 'react-redux';
import LiMovie from "../LiMovie/LiMovie";
import './Favorites.css';

export class ConnectedList extends Component {

  removeFavorite = (movie) => {
    this.props.removeMovieFavorite(movie.imdbID);
  }
  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {this.props.favs.map((fav, i) => {
            return (<LiMovie
              key={i}
              movie={fav}
              remFav={this.removeFavorite}
            />)
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    favs: state.moviesFavourites
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeMovieFavorite: movie => dispatch(removeMovieFavorite(movie))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedList);

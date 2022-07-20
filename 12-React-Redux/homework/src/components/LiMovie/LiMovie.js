import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Limovie.css';

class LiMovie extends Component {
    render() {
        return (
            <li className='item-movie'>
                {this.props.addFav ? <button onClick={() => { this.props.addFav(this.props.movie) }}>Añadir a favoritos</button> : ''}
                {this.props.remFav ? <button onClick={() => { this.props.remFav(this.props.movie) }}>Eliminar de favoritos</button> : ''}
                <Link to={`/movie/${this.props.movie.imdbID}`}>
                    <picture>
                        <img src={this.props.movie.Poster} alt='poster' />
                    </picture>
                    <h2>{this.props.movie.Title} <span>({this.props.movie.Year})</span></h2>
                    <p>{this.props.movie.Type}</p>
                </Link>
            </li>
        );
    }
}

export default LiMovie;
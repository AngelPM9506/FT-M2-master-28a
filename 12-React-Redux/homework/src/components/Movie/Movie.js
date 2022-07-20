import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail, removeMovieDetail } from '../../actions/index';

import './Movie.scss';



class Movie extends React.Component {
    componentWillMount() {
        const { match: { params: { id } } } = this.props;
        this.props.getMovieDetail(id);
    }
    componentWillUnmount(){
        this.props.removeMovieDetail();
    }
    render() {
        return (
            <article className='container clearfix'>
                <h2 className='title'>{this.props.details.Title}</h2>
                <div className='datos'>
                    <div className='dato'>
                        <p>Released</p>
                        <span>{this.props.details.Released}</span>
                    </div>
                    <div className='dato'>
                        <p>Runtime</p>
                        <span>{this.props.details.Runtime}</span>
                    </div>
                    <div className='dato'>
                        <p>Genre</p>
                        <span>{this.props.details.Genre}</span>
                    </div>
                    <div className='dato'>
                        <p>Director</p>
                        <span>{this.props.details.Director}</span>
                    </div>
                    <div className='dato'>
                        <p>Actors</p>
                        <span>{this.props.details.Actors}</span>
                    </div>
                    <div className='dato'>
                        <p>Writer</p>
                        <span>{this.props.details.Writer}</span>
                    </div>
                    <div className='dato'>
                        <p>Language</p>
                        <span>{this.props.details.Language}</span>
                    </div>
                    <div className='dato'>
                        <p>Countrya</p>
                        <span>{this.props.details.Country}</span>
                    </div>
                    <div className='dato'>
                        <p>Awards</p>
                        <span>{this.props.details.Awards}</span>
                    </div>
                    <div className='dato'>
                        <p>Rated</p>
                        <span>{this.props.details.Rated}</span>
                    </div>
                </div>
                <div className='description'>
                    <picture>
                        <img src={this.props.details.Poster} alt='poster' />
                    </picture>
                    <div className='texto'>
                        <h2>Description</h2>
                        <p>{this.props.details.Plot}</p>
                    </div>
                </div>
            </article>
        );
    }
}


function mapStateToProps(state) {
    return {
        details: state.movieDetail
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getMovieDetail: movie => dispatch(getMovieDetail(movie)),
        removeMovieDetail: () => dispatch(removeMovieDetail())
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Movie);


/**
{
  "Title": "Angel",
  "Year": "1999–2004",
  "Rated": "TV-14",
  "Released": "05 Oct 1999",
  "Runtime": "44 min",
  "Genre": "Action, Drama, Fantasy",
  "Director": "N/A",
  "Writer": "David Greenwalt, Joss Whedon",
  "Actors": "David Boreanaz, Charisma Carpenter, Alexis Denisof",
  "Plot": "The vampire Angelus, now known as Angel, has a human soul, but committed terrible crimes in the past. Seeking forgiveness and trying to redeem himself, he moves from Sunnydale (and a relationship with Buffy Summers, of \"Buffy the Vampire Slayer\") to Los Angeles, where he helps the downtrodden by thwarting the supernatural creatures that prey on them.",
  "Language": "English",
  "Country": "USA",
  "Awards": "Nominated for 1 Primetime Emmy. 12 wins & 48 nominations total",
  "Poster": "https://m.media-amazon.com/images/M/MV5BODU0M2NjZjgtZmQ1Zi00OWIyLTg1ODctMTg4Njg0MmE5YzU4XkEyXkFqcGdeQXVyNzA5NjUyNjM@._V1_SX300.jpg",
  "Ratings": [
    {
      "Source": "Internet Movie Database",
      "Value": "7.9/10"
    }
  ],
  "Metascore": "N/A",
  "imdbRating": "7.9",
  "imdbVotes": "69,837",
  "imdbID": "tt0162065",
  "Type": "series",
  "totalSeasons": "5",
  "Response": "True"
}
 */
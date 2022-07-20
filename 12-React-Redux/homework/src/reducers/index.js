import {
    GETMOVIES,
    GETMOVIEDETAIL,
    ADDMOVIEFAVORITE,
    REMOVEMOVIEFAVORITE
} from '../actions'
const initialState = {
    moviesFavourites: [],
    moviesLoaded: [],
    movieDetail: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GETMOVIES:
            return ({
                ...state,
                moviesLoaded: [...action.payload.Search]
            });
        case ADDMOVIEFAVORITE:
            return ({
                ...state,
                moviesFavourites: state.moviesFavourites.concat(action.payload)
            });
        case REMOVEMOVIEFAVORITE:
            return ({
                ...state,
                moviesFavourites: state.moviesFavourites.filter(movie => movie.imdbID !== action.payload)
            });
        case GETMOVIEDETAIL:
            return ({
                ...state,
                movieDetail: action.payload
            });
        default:
            return state;
    }
}
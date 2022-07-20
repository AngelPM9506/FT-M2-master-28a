export const GETMOVIES = 'GET_MOVIES';
export const GETMOVIEDETAIL = 'GET_MOVIE_DETAIL';
export const ADDMOVIEFAVORITE = 'ADD_MOVIE_FAVORITE';
export const REMOVEMOVIEFAVORITE = 'REMOVE_MOVIE_FAVORITE';
export const REMOVEMOVIEDETAIL = 'REMOVE_MOVIE_DETAIL';

export const getMovies = (value) => {
    return function (dispatch) {
        return fetch(`http://www.omdbapi.com/?apikey=c1cab12c&s=${value}&plot=full`)
            .then(response => response.json())
            .then(json => {
                dispatch({ type: GETMOVIES, payload: json });
            });
    }
}
export const getMovieDetail = (value) => {
    return function (dispatch) {
        return fetch(`http://www.omdbapi.com/?apikey=c1cab12c&i=${value}&plot=full`)
            .then(response => response.json())
            .then(json => {
                dispatch({ type: GETMOVIEDETAIL, payload: json });
            });
    }
}
export const addMovieFavorite = (value) => {
    return { type: ADDMOVIEFAVORITE, payload: value };
}
export const removeMovieFavorite = (value) => {
    return { type: REMOVEMOVIEFAVORITE, payload: value };
}
export const removeMovieDetail = () => {
    return { type: REMOVEMOVIEDETAIL };
}
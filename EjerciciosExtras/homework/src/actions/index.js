export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const GET_ALL_USERS = 'GET_ALL_USERS';
export const GET_ALL_USERS_POST = 'GET_ALL_USERS_POST';
export const GET_ALL_COMMENTS_POST = 'GET_ALL_COMMENTS_POST';

/**obtener todos los posts */
export const getAllPosts = () => {
    return dispatch => {
        return fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => dispatch({ type: GET_ALL_POSTS, payload: json }));
    }
}
/**obtener todos los usuarios */
export const getAllUsers = () => {
    return dispatch => {
        return fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => dispatch({ type: GET_ALL_USERS, payload: json }));
    };
}
/**obtener todos los posts de un usuario */
export const getAllUserPosts = (id) => {
    return dispatch => {
        return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then(response => response.json())
            .then(json => dispatch({ type: GET_ALL_USERS_POST, payload: json }));
    };
}
/**obtener todos los comentarios de un post */
export const getAllCommentsPost = (id) => {
    return dispatch => {
        return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then(response => response.json())
            .then(jason => dispatch({ type: GET_ALL_COMMENTS_POST, payload: jason }));
    };
}
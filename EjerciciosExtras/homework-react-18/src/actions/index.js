export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const GET_ALL_USERS = 'GET_ALL_USERS';
export const GET_ALL_USER_POSTS = 'GET_ALL_USER_POSTS';
export const GET_ALL_COMMENTS_POST = 'GET_ALL_COMMENTS_POST';

/**obtener todos los posts */
export const get_all_posts = () => {
    return dispatch => {
        return fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => dispatch({ type: GET_ALL_POSTS, payload: json }));
    }
}
/**obtener todos los usuarios */
export const get_all_users = () => {
    return dispatch => {
        return fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => dispatch({ type: GET_ALL_USERS, payload: json }));
    };
}
/**obtener todos los posts de un usuario */
export const get_all_user_posts = (id) => {
    return dispatch => {
        return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then(response => response.json())
            .then(json => dispatch({ type: GET_ALL_USER_POSTS, payload: json }));
    };
}
/**obtener todos los comentarios de un post */
export const get_all_comments_post = (id) => {
    return dispatch => {
        return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then(response => response.jason())
            .then(jason => dispatch({ type: GET_ALL_COMMENTS_POST, payload: jason }));
    };
}


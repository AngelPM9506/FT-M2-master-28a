export function validate(input) {
    let error = {};
    //let regex = /(?=.*[0-9])/;
    if (!input.username) {
        error.username = 'Username is required';
        return error;
    }
    if (!/\S+@\S+\.\S+/.test(input.username)) {
        error.username = 'Username is invalid';
        return error;
    }
    if (!input.password) {
        error.password = 'Password is required';
        return error;
    }
    if (!/(?=.*[0-9])/.test(input.password)) {
        error.password = 'Password is invalid';
        return error;
    }
    return error;
}
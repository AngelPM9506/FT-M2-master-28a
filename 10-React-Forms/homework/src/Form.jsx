import React, { useState } from 'react';
//import { validate } from './validate';
export default function Form() {
  const [input, setInput] = useState({
    username: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const handleInputChange = function (e) {
    setErrors(validate({
      ...input,
      [e.target.name]: e.target.value
    }));
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  }
  return (
    <form className='form'>
      <div className="campo">
        <label htmlFor='username'>Username:</label>
        <input type="text" name="username" id="username"
          className={errors.username && 'danger'}
          onChange={handleInputChange}
          value={input['username']}
          placeholder='ejemplo@ejemplo.com' />
      </div>
      <p className="danger">{errors.username}</p>
      <div className="campo">
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password"
          className={errors.password && 'danger'}
          onChange={handleInputChange}
          value={input['password']} />
      </div>
      <p className="danger">{errors.password}</p>
      <input type="submit" value="Iniciar Sesión" />
    </form>
  )
}
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
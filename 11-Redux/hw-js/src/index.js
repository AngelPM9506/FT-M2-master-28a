const { createStore } = require('redux');
const contador = require('./reducer');
const { incremento, decremento } = require('./actions');

// En esta linea creamos nuestro store. Pasandole como parametro nuestro Reducer
var store = createStore(contador);
// Obtenemos el elemento con el id `valor`.
var valor = document.querySelector('#valor');

// Esta funcion nos va a servir para actualizar nuestro DOM con el valor que tengamos en nuestro Store.
// En el primer render y cada vez que nos subscribamos al Store.
// Utilizamos el elemento obtenido arriba para mostrar el State.
function renderContador() {
  // Obtenemos la propiedad 'contador' de nuestro store:
  let valContador = store.getState().contador;
  // Seteamos el numero obtenido como texto dentro del elemento con id 'valor':
  valor.textContent = valContador;
}

// Ejecutamos la funcion 'renderContador':

renderContador();

// Nos subscribimos al store pasandole la misma funcion. Asi cada vez que llegue una accion, ejecutamos la funcion:

const subscribe = store.subscribe(renderContador);
subscribe();

// Por ultimo, utilizamos los botones de nuestro HTML para que cada vez que hagamos click,
// hagan un dispatch al store de la accion correspondiente:
/**seleccion de botones */
const incrementoBtn = document.querySelector('#incremento');
const decrementoBtn = document.querySelector('#decremento');
const incrementoImparBtn = document.querySelector('#incrementoImpar');
const incrementoAsyncBtn = document.querySelector('#incrementoAsync');

incrementoBtn.addEventListener('click', () => {
  let actionIncrement = incremento();
  store.dispatch(actionIncrement);
  renderContador();
});
decrementoBtn.addEventListener('click', () => {
  let actionDrecrement = decremento();
  store.dispatch(actionDrecrement);
  renderContador();
});
incrementoImparBtn.addEventListener('click', () => {
  if (store.getState().contador % 2 === 0) {
    let actionIncrement = incremento();
    store.dispatch(actionIncrement);
    renderContador();
  }
});
incrementoAsyncBtn.addEventListener('click', () => {
  setTimeout(() => {
    let actionIncrement = incremento();
    store.dispatch(actionIncrement);
    renderContador();
  }, 1000);
});
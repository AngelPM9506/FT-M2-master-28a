import React, { useState, useEffect, useRef } from 'react';
import './Timer.scss';

const Timer = () => {
  /**estados */
  const [segundos, setSegundos] = useState(0);
  const [activo, setActivo] = useState(false);
  const [tipo, setTipo] = useState('Contador');
  /**funciones de cambio de estado */
  function toggle() {
    setActivo(!activo);
  }
  function reset() {
    setSegundos(0);
    setActivo(false);
  }
  function cambioTipo() {
    if (tipo === 'Contador') { setTipo('Cuenta Regresiva') }
    if (tipo === 'Cuenta Regresiva') { setTipo('Contador') }
  }
  /**use efect*/
  useEffect(() => {
    /**declarar un intervalo**/
    let intervalo = null;
    /**Relizar el conteo con un setInterval**/
    if (activo && tipo === 'Contador') {
      intervalo = setInterval(() => {
        setSegundos(segundos => segundos + 1);
      }, 1000);
    }
    /**agregar la funcionalidad de cuenta regresiva*/
    if (activo && tipo === 'Cuenta Regresiva') {
      intervalo = setInterval(()=>{
        setSegundos(segundos => segundos - 1);
      }, 1000);
    }
    /**Limpiar el intervalo bajo ciertas condiciones**/
    if (!activo && segundos !== 0 && tipo === 'Contador') {
      clearInterval(intervalo);
    }
    /**resetear si el conteo llega a 0**/
    if (segundos === 0 && tipo === 'Cuenta Regresiva') {
      reset();
      clearInterval(intervalo);
    }
    /**cuando el componente se cierre se limpia todo */
    return () => clearInterval(intervalo);
    /**tomar los valores que probocan el cambio */
  }, [activo, segundos, tipo]);
  /**uise ref */
  const myRef = useRef(null);
  /**funcionalidad de capturar los segundos
   * useRef. curren captura directamente el valor 
   * del input al que se refiere
   */
  function agregaSegundos() {
    let ref = myRef.current.value;
    setSegundos(ref);
  }
  /**renderizado */
  return (
    <div className="app">
      <div className="time">
        {segundos}s
      </div>
      <div className="row">
        <button className={`button button-primary button-primary-${activo ? 'active' : 'inactive'}`} onClick={toggle}>
          {activo ? 'Pausa' : 'Inicio'}
        </button>
        <button className="button button-secondary" onClick={reset}>
          reset
        </button>
      </div>
      <button className="button" onClick={cambioTipo}>
        {tipo}
      </button>
      {tipo === 'Cuenta Regresiva' && <input type="number" ref={myRef} onChange={agregaSegundos} autoComplete="off" placeholder="ingresa segundos" />}
    </div>
  );
};

export default Timer;

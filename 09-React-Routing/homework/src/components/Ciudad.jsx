//import { Component, Fragment } from "react";
import { useParams } from "react-router-dom";
/**useParamas solo se puede usar en objetos en forma de function
 * no se puede usar en class
*/

function Ciudad(props) {
    let params = useParams();
    let city = props.onFilter(params.ciudadId);
    console.log(city);
    return (
        <section className="ciudad">
            <h1>{city.name}</h1>
            <div className="infoCiudad">
                <div className="info">
                    <div className="dato">
                        <p>Temperatura: </p>
                        <span>{city.main.temp}°C</span>
                    </div>
                    <div className="dato">
                        <p>Viento: </p>
                        <span>{city.wind.speed} km/h</span>
                    </div>
                    <div className="dato">
                        <p>Cantidad de nuves: </p>
                        <span>{city.clouds.all}</span>
                    </div>
                    <div className="dato">
                        <p>Cielo: </p>
                        <span>{city.weather[0].main}</span>
                    </div>
                    <div className="dato">
                        <p>Descripcion de meteorología: </p>
                        <span>{city.weather[0].description}</span>
                    </div>
                    <div className="dato">
                        <p>Latitud: </p>
                        <span>{city.coord.lat}</span>
                    </div>
                    <div className="dato">
                        <p>Longitud: </p>
                        <span>{city.coord.lon}</span>
                    </div>
                </div>
                <picture>
                    <img src={urlImg(city.weather[0].icon)} alt="" />
                </picture>
            </div>
        </section>
    )
    function urlImg(imgProps) {
        return `http://openweathermap.org/img/wn/${imgProps}@2x.png`;
    }
}

export default Ciudad;
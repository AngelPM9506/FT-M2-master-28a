import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Card extends Component {
  fToCl(f) {
    let c = (f - 32) / 1.8;
    return c.toFixed(1) + '°C';
  }
  kToCl(k) {
    let c = k - 273.15;
    return c.toFixed(1) + '°C';
  }
  urlImg(imgProps) {
    return `http://openweathermap.org/img/wn/${imgProps}@2x.png`;
  }
  close() {
    let id = this.props.id;
    console.log(this.props.name);
    this.props.onClose(id);
  }
  render() {
    let id = this.props.id;
    return (
      <div className='card'>
        <div className='cardHeader'>
          <button className='closeCard' onClick={e => this.close()}>X</button>
        </div>
        <div className='cardTitle'>
          <Link to={`/ciudad/${id}`}>
            <h2>{this.props.name}</h2>
          </Link>
          <picture>
            <img src={this.urlImg(this.props.img)} alt="Clima" />
          </picture>
        </div>
        <div className='datos'>
          <div className='max'>
            <span>Max</span>
            <p>{this.props.max}°C</p>
          </div>
          <div className='temp'>
            <span>Actual</span>
            <p>{this.props.temp}°C</p>
          </div>
          <div className='min'>
            <span>Min</span>
            <p>{this.props.min}°C</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
// export default function Card(props) {
//   // acá va tu código
//   // <div>Card Component</div>
// };
import React, { Component } from 'react';

class Card extends Component {
  fToCl(f) {
    let c = (f - 32) / 1.8;
    return c + '°C';
  }
  kToCl(k) {
    let c = k - 273.15;
    return c + '°C';
  }
  urlImg(imgProps) {
    return `http://openweathermap.org/img/wn/${imgProps}@2x.png`
  }
  render() {
    return (
      <div className='card'>
        <button className='closeCard' onClick={this.props.onClose}>X</button>
        <h3>{this.props.name}</h3>
        <div className='datos'>
          <div className='max'>
            <p>max</p>
            <p>{this.kToCl(this.props.max)}</p>
          </div>
          <div className='min'>
            <p>min</p>
            <p>{this.kToCl(this.props.min)}</p>
          </div>
          <picture>
            <img src={this.urlImg(this.props.img)} alt="Clima" />
          </picture>
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
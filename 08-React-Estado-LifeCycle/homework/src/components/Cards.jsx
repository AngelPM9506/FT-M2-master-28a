import { Component } from 'react';
import Card from './Card';
class Cards extends Component {
  render() {
    if (this.props.cities !== undefined && this.props.cities.length > 0) {
      return (
        <div className='cards'>
          {this.props.cities.map((city, i) => {
            return (
              <Card
                key={i}
                id={city.id}
                max={city.main.temp_max}
                min={city.main.temp_min}
                temp={city.main.temp}
                name={city.name}
                img={city.weather[0].icon}
                onClose={this.props.onClose}
              />
            );
          })}
        </div>
      );
    } else {
      return (
        <div className='noCards'>
          <h3>No hay datos para mostrar</h3>
        </div>
      );
    }
  }
}
export default Cards;
// export default function Cards(props) {
//   // acá va tu código
//   // tip, podés usar un map
//   return <div>Cards Component</div>
// };
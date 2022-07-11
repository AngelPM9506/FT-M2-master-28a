import { Component } from 'react';
import Card from './Card';
class Cards extends Component {
  render() {
    return (
      <div className='cards'>
        {this.props.cities.map((city, i) => {
          return (
            <Card
              key={i}
              max={city.main.temp_max}
              min={city.main.temp_min}
              name={city.name}
              img={city.weather[0].icon}
              onClose={() => alert(city.name)}
            />
          );
        })}
      </div>
    );
  }
}
export default Cards;
// export default function Cards(props) {
//   // acá va tu código
//   // tip, podés usar un map
//   return <div>Cards Component</div>
// };
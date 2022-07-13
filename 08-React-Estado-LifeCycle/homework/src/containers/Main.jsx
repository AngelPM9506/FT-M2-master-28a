import { Component } from "react";
//import Card from '../components/Card.jsx';
import Cards from '../components/Cards.jsx';

class Main extends Component {
    render() {
        return (
            <main className="container">
                <h1 className="tituloHoja">Aplicación del clima en Henrry</h1>
                <div className="alertas"></div>
                <div>
                    <Cards
                        onClose={this.props.onClose}
                        cities={this.props.data}
                    />
                </div>
            </main>
        );
    }
}

export default Main;
import { Component } from "react";
import { Routes, Route } from 'react-router-dom';
import Cards from '../components/Cards.jsx';
import About from '../components/About.jsx';
import Ciudad from "../components/Ciudad.jsx";

class Main extends Component {
    render() {
        return (
            <main className="container">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <div>
                                <h1 className="tituloHoja">Aplicación del clima en Henrry</h1>
                                <Cards
                                    onClose={this.props.onClose}
                                    cities={this.props.data}
                                />
                            </div>
                        }
                    />
                    <Route
                        path="/about"
                        element={
                            <div>
                                <About />
                            </div>
                        }
                    />
                    <Route path="/ciudad">
                        <Route
                            path=":ciudadId"
                            element={<Ciudad 
                                cities={this.props.data}
                                onFilter={this.props.onFilter}
                                />}
                        />
                    </Route>
                </Routes>
            </main>
        );
    }
}

export default Main;

/**
 * 
            <main className="container">
                <h1 className="tituloHoja">Aplicación del clima en Henrry</h1>
                <div className="alertas"></div>
                <div>
                    <Cards
                        onClose={this.props.onClose}
                        cities={this.props.data}
                    />
                </div>
                <div>
                    <About/>
                </div>
                <div>
                    <Ciudad/>
                </div>
            </main>
 */
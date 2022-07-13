import { Component, Fragment } from "react";

class About extends Component {
    render() {
        return (
            <Fragment>
                <h1 className="tituloHoja">Acerca de esta aplicación </h1>
                <div className="container texto">
                    <p>Algo de como Funciona la AppWeb del clima</p>
                </div>
            </Fragment>
        );
    }
}
export default About;
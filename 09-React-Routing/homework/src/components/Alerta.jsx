import { Component } from "react";

class Alerta extends Component{
    render(){
        return(
            <p className={this.props.tipo}>{this.props.message}</p>
        )
    }
}
export default Alerta;
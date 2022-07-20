import React, {Component, Fragment} from "react";

import Favorites from "./components/Favorites/Favorites";
import Buscador from "./components/Buscador/Buscador";
import NavBar from "./components/NavBar/NavBar";
import { Route } from "react-router-dom";
import Movie from "./components/Movie/Movie";

class App extends Component {
  render(){
    return (
        <Fragment>
            <NavBar />
            <Route exact path="/" component={Buscador} />
            <Route path="/favs" component={Favorites} />
            <Route path="/movie/:id" component={Movie} />
        </Fragment>
    );
  }
}

export default App;

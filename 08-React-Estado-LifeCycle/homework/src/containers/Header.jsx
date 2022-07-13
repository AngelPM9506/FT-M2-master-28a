import { Component } from "react";
import logo from '../img/logoHenry.png';
import SearchBar from '../components/SearchBar';

class Header extends Component {
    render() {
        return (
            <header>
                <section>
                    <article>
                        <img src={logo} alt="logo henry" />
                        <h2>Henry - Weather App</h2>
                    </article>
                    <nav>
                        <SearchBar onSearch={this.props.onSearch} />
                    </nav>
                </section>
            </header>
        );
    }
}

export default Header;
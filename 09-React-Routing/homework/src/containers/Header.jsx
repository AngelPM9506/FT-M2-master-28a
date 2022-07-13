import { Component } from "react";
import logo from '../img/logoHenry.png';
import SearchBar from '../components/SearchBar';
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <header>
                <section>
                    <Link to='/'>
                        <article>
                            <img src={logo} alt="logo henry" />
                            <h2>Henry - Weather App</h2>
                        </article>
                    </Link>
                    <nav>
                        <Link to='/about'><span>About</span></Link>
                        <SearchBar onSearch={this.props.onSearch} />
                    </nav>
                </section>
            </header>
        );
    }
}

export default Header;
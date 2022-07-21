import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { getAllPosts } from "../../actions";
import './Buscador.css';

export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filtrados: [],
      postsSearch: ''
    }
  }
  componentDidMount() {
    this.props.getAllPosts();
    this.setState({ filtrados: this.props.posts })
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      filtrados: this.props.posts.filter(p => p.title.includes(this.state.postsSearch))
    })
    this.setState({
      postsSearch: ""
    })
  }

  viewAllPost() {
    this.setState({
      filtrados: this.props.posts
    })
  }
  captInput(value) {
    this.setState({
      postsSearch: value
    });
  }
  render() {
    const { postsSearch } = this.state;
    return (
      <div className="details">
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="user">Posts: </label>
            <input type="text" id="title" autoComplete="off" onChange={e => this.captInput(e.target.value)} value={postsSearch} />
          </div>
          <button className="btn" type="submit">BUSCAR</button>
        </form>
        <button className="btn btn2" onClick={() => this.viewAllPost()}>VER TODOS</button>
        <div className="details">
          <h4 className="title">Posts </h4>
          <div className="card">
            {this.state.filtrados.map((filt, i) => {
              return (
                <div key={i} className="container" >
                  <h3 className="title-post">{filt.title}</h3>
                  <p>{filt.body}</p>
                  <Link className="btn link" to={`/user/${filt.userId}/post/${filt.id}/coments`}>Comentarios</Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = store => {
  return { posts: store.posts };
}
export const mapDispatchToProps = dispatch => {
  return {
    getAllPosts: id => dispatch(getAllPosts(id))
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Buscador);

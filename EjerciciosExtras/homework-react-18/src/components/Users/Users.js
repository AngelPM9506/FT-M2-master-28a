import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { get_all_users } from '../../actions/index';
import './Users.css';

class Users extends Component {
  componentDidMount(){
    this.props.get_all_users();
  }

  render() {
    return (
      <div className="details">
        <h4 className="title">Usuarios del blog</h4>
        {/* Aqui deberias poner tu lista de usuarios! */}
        <table>
          <thead>
            <tr className="header">
              <th>Nombre</th>
              <th>Usuario</th>
              <th>Ver</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.users.map((usuario) => {
                return(
                  <tr>
                    <th>{`${usuario.name} ${usuario.surname}`}</th>
                    <th>{`${usuario.email}`}</th>
                    <th><Link to={`/users/${usuario.id}/posts`} className="button">Posts</Link></th>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
}
const mapDispatchToProps = dispatch => {
  return {
    get_all_users: () => dispatch(get_all_users())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);


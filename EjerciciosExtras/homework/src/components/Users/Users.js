import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { getAllUsers } from '../../actions/index';
import './Users.css';

export class Users extends Component {
  componentDidMount() {
    this.props.getAllUsers();
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
              this.props.users.map((usuario, i) => {
                return (
                  <tr key={i}>
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
export const mapStateToProps = state => {
  return { users: state.users };
}

export const mapDispatchToProps = dispatch => {
  return { getAllUsers: () => dispatch(getAllUsers()) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);


import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllUserPosts } from '../../actions';
import './UserPosts.css';

export class UserPosts extends React.Component {
  componentDidMount(){
    const { match: { params: { id } } } = this.props;
    this.props.getAllUserPosts(id);
  }

  render() {
    const { match: { params: { id } } } = this.props;
    return (
      <div className="details">
        <h2 className="title">Posts del usuario {id}</h2>
        {this.props.userPosts.map((post, i) =>{
          return(
            <div className='container' key={i}>
              <h3 className='title-post'>{post.title}</h3>
              <p>{post.body}</p>
              <Link className='btn link' to={`/user/${post.userId}/post/${post.id}/coments`}>Comentarios</Link>
            </div>
            );
        })}
      </div>
    )
  }
}

export const mapStateToProps = store => {
  return { userPosts: store.userPosts };
}
export const mapDispatchToProps = dispatch => {
  return{
    getAllUserPosts: id => dispatch(getAllUserPosts(id))
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(UserPosts);
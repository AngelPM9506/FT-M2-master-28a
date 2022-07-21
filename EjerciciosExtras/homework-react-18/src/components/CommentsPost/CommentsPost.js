import React from 'react';
import { connect } from 'react-redux';
import { get_all_comments_post } from '../../actions/index';

import './CommentsPost.css';

export class CommentsPost extends React.Component {

  componentDidMount() {
    console.log('Aqui es donde va el id del post');
    /*const id = this.props.id
     this.props.getAllCommentsPost(id)
    .then(c =>{
      console.log("Comentarios cargados con éxito...")
    })
    .catch(err =>console.error(err))*/
  }

  render() {
    const idPost = this.props.id
    return (
      <div className="details">
        <h4>Comentarios del Post {idPost}</h4>
        {!this.props.commentsPost ? console.log("Espero ...") :
          this.props.commentsPost.map(function (comment) {
            return (
              {/*<div className= "container">
                    <p key ={comment.id}> 
                    <h4>{comment.id} - {comment.name}</h4> 
                    {comment.body}
                    </p>
                  </div>*/}
            )

          })}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    comments: state.commentsPost
  };
}

const mapDispatchToProps = dispatch => {
  return {
    get_all_comments_post: id => dispatch(get_all_comments_post(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsPost);
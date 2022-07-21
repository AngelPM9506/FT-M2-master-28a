import React from 'react';
import { connect } from 'react-redux';
import { get_all_user_posts } from '../../actions';
import './UserPosts.css';

class UserPosts extends React.Component {
  componentDidMount() {
    // usando destructuring
    //const { match: { params: { userid } } } = this.props;
    // manera convencional
    const userid = this;
    console.log(userid);
  }
  render() {
    return (
      <div className="details">
        <h4 className="title">Posts del usuario {/*userid*/}</h4>

      </div>
    )
  }
}

const mapStateToProps = store => {
  return{
    posts: store.userPosts
  };
}
const mapDispatchToProps = dispatch => {
  return{
    get_all_user_posts: id => dispatch(get_all_user_posts(id))
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(UserPosts);
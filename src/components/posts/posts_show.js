import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../../actions/posts/index';
import { Link } from 'react-router';

class PostsShow extends Component {
  static contextTypes = {
      router: PropTypes.object
  }

  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }

  deletePost() {
    this.props.deletePost(this.props.params.id).then(
      () => {
          this.context.router.push('/posts-app');
    });
  }

  render() {
    if (!this.props.post) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <Link to="posts-app">Home</Link>
        <h3>{this.props.post.title}</h3>
        <h6>Categories: {this.props.post.categories}</h6>
        <span>{this.props.post.content}</span>
        <button className="btn btn-danger" onClick={this.deletePost.bind(this)}>Delete</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { post: state.posts.post };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);

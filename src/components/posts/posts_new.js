import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { createPost } from '../../actions/posts/index';
import { Link } from 'react-router';

class PostsNew extends Component {
  // PostsNew requests access to context router. Redux will go back to index
  // to search for router object.
  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(props) {
    this.props.createPost(props).then(
      ()  => {
        // A post has been creatd. navigate to /posts-app.
        this.context.router.push('/posts-app');
      }
    );
  }

  render() {
    // has to use handleSubmit to submit form.
    const { fields: {title, categories, content}, handleSubmit } = this.props;

    return (
      <div>
        <h3>Add a new post</h3>
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))} >
            <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
              <label>Title</label>
              <input type="text" className="form-control" { ...title }/>
              <div className="text-help">{ title.touched ? title.error : '' }</div>
            </div>
            <div className="form-group">
              <label>Categories</label>
              <input type="text" className="form-control" { ...categories }/>
            </div>
            <div className="form-group">
              <label>Content</label>
              <textarea className="form-control" { ...content }/>
            </div>

            <button type="submit" className="btn btn-primary" >Add</button>
            <Link to="/posts-app" className="btn btn-danger" >Cancel</Link>
          </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Enter a title';
  }

  if (!values.categories) {
    errors.categories = 'Enter category';
  }

  return errors;
}

// connect function has the first argument mapStateToProps and the second argument mapDispatchToProps
// redux form function has the first argument, options
// and the first argument mapStateToProps and the second argument mapDispathToProps

export default reduxForm({
  form: 'postNew',
  fields: ['title', 'categories', 'content'],
  validate
}, null, { createPost })(PostsNew);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchPosts from '../../actions/posts/index';
import { Link } from 'react-router';

class PostsApp extends Component {
	componentWillMount() {
		this.props.fetchPosts();
	}

	renderPosts() {
		return this.props.posts.map((post) => {
			const title = post.title ? post.title : 'no title';

			return (
				<li className="list-group-item" key={post.id}>
					<Link to={"posts-app/posts/" + post.id}>
						<span className="pull-xs-right">{title}</span>
						<strong>{post.categories}</strong>
					</Link>
				</li>
			);
		});
	}

	render() {
		return (
			<div>
				list of posts
				<div className="text-xs-right">
					<Link to="posts-app/posts/new" className="btn btn-primary" >
						Add a post
					</Link>
				</div>
				<div>
					<ul className="list-group" >
						{this.renderPosts()}
					</ul>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { posts: state.posts.all }
}

export default connect(mapStateToProps, { fetchPosts })(PostsApp);

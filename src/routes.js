import React from 'react';
import { Route, IndexRoute } from 'react-router';

import YoutubeApp from './components/youtube_app';
import BooksApp from './components/books/app';
import TemperatureApp from './components/temperature/app';
import PostsApp from './components/posts/app';
import App from './components/app';
import PostsNew from './components/posts/posts_new';
import PostsShow from './components/posts/posts_show';

export default (
	<Route path="/" components={App} >
	 	<Route path="temperature-app" components={TemperatureApp} />
	 	<Route path="youtube-app" components={YoutubeApp} />
	 	<Route path="books-app" components={BooksApp} />
	 	<Route path="posts-app" components={PostsApp} />
		<Route path="posts-app/posts/new" components={PostsNew} />
		<Route path="posts-app/posts/:id" components={PostsShow} />
	</Route>
);

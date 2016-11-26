import { combineReducers } from 'redux';
import BooksReducer from './books';
import ActiveBook from './active_book';
import Weather from './weather';
import Posts from './posts';
import { reducer as formReducer } from 'redux-form';

// application state
const rootReducer = combineReducers({
	books: BooksReducer,
	activeBook: ActiveBook,
	weather: Weather,
	form: formReducer,
	posts: Posts,
});

export default rootReducer;

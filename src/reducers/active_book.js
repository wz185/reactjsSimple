// reducer state. In another word, a piece of application state.
export default function (state = {title: 'Select a book to get started'}, action) {
	switch (action.type) {
		case 'BOOK_SELECTED':
			return action.payload;
	}

	return state;
}
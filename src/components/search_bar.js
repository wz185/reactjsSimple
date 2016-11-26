import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { searchTerm: 'Search Here' };
	}

	render() {
		return (
			<div className="search-bar">
				<input 
					value={ this.state.searchTerm }
					onChange={event => this.onInputChange(event.target.value)} />
			</div>
		);
	}

	onInputChange(term) {
		this.setState({searchTerm: term});
		this.props.onSearchVideo(term);
	}
}

export default SearchBar;
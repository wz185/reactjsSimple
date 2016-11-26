import React, {Component} from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoDetail from './video_detail';

const API_KEY = 'AIzaSyAI3eU72FLfynFfkyVKzR0s84oHKCHvT9Y';

class YoutubeApp extends Component {
	constructor(props) {
		super(props);

		this.state = { 
			videos: [],
			selectedVideo: null
		};

		// default term
		this.searchVideo('surfboards');
	}

	searchVideo(term) {
		YTSearch({ key: API_KEY, term: term }, (videos) => {
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}

	render() {
		const searchVideo = _.debounce((term) => {this.searchVideo(term)}, 300);

		return (
			<div>
				<SearchBar onSearchVideo={(term) => searchVideo(term)}/>
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
					onSelectVideo={selectedVideo => this.setState({selectedVideo})} 
					videos={this.state.videos} />
			</div>
		);
	}
}

export default YoutubeApp;
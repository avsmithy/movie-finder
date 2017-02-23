import React from 'react';
import ReactDOM from 'react-dom';
import debounce from 'throttle-debounce/debounce';
import App from './components/App';

export default class Main {

	constructor(searcher) {
		this.searcher = searcher;

		this.searchForMovies = this.searchForMovies.bind(this);
		this.debouncedSendQuery = debounce(500, this.sendQuery);

		this.render();
	}

	render() {
		this.component = ReactDOM.render(
			<App searchForMovies={this.searchForMovies} />,
			document.getElementById('root'),
		);
	}

	searchForMovies(searchTerm) {
		this.component.setState({
			isLoading: true
		});
		this.debouncedSendQuery(searchTerm);
	}

	sendQuery(searchTerm) {
		// TODO Ignore the return of previous searches if they resolve after the latest one
		this.searcher.search(searchTerm).then((searchResultList) => {
			this.component.setState({
				isLoading: false,
				searchResultList
			});
		});
	}

}
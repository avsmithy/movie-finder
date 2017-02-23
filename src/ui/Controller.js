import debounce from 'lodash.debounce';

export default class Controller {

	constructor(searcher) {
		this.searcher = searcher;
		this.searchForMovie = this.searchForMovie.bind(this);
		this.sendQuery = debounce(this.sendQuery, 500);
	}

	setApp(component) {
		this.component = component;
	}

	getActions() {
		return {
			searchForMovie: this.searchForMovie
		}
	}

	searchForMovie(searchTerm) {
		this.component.setState({
			isLoading: true
		});
		this.sendQuery((searchTerm));
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
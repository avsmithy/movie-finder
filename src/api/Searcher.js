import MovieDBAPI from './endpoints/MovieDBAPI';

function getMovieDBAPI() {
	const apiKey = '7738b25ad88a664fee557945c2c8e8a9';
	return new MovieDBAPI(apiKey);
}

export default class Searcher {
	constructor() {
		// TODO inject these
		this._endpoints = [];
		this._endpoints.push(getMovieDBAPI());
	}

	search(searchTerm) {
		// TODO If only some succeed, resolve promise
		const searches = this._endpoints.map(endpoint => endpoint.search(searchTerm));
		return Promise.all(searches);
	}
}

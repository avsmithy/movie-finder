export default class SearchResultList {

	constructor(results) {
		this._results = results || [];
	}

	get searchResults() {
		return this._results;
	}

}
export default class SearchResultList {

	/**
	 * @param {Array[SearchResult]} results
	 */
	constructor(results) {
		this._results = results || [];
	}

	get searchResults() {
		return this._results;
	}

}
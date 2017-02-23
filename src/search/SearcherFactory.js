import MovieDBAPI from './searchers/MovieDBSearcher';

const mdbApiKey = '7738b25ad88a664fee557945c2c8e8a9';

export default class SearcherFactory {

	/**
	 * @returns {Searcher}
	 */
	static create() {
		return new MovieDBAPI(mdbApiKey);
	}

}

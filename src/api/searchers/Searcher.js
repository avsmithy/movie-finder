/* eslint-disable */
import SearchResultList from '../results/SearchResultList';

export default class Searcher {

	search(searchTerm) {
		return new Promise((resolve) => resolve(new SearchResultList()));
	}

}

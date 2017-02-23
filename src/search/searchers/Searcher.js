/* eslint-disable */
import SearchResultList from '../results/SearchResultList';


// Interface for Searchers
export default class Searcher {

	search(searchTerm) {
		return new Promise((resolve) => resolve(new SearchResultList()));
	}

}

import Searcher from './Searcher';
import SearchResult from '../results/SearchResult';
import SearchResultList from '../results/SearchResultList';

const apiURI = 'https://api.themoviedb.org/3/search/movie';
const imagePrefix = 'https://image.tmdb.org/t/p/w300';

function getQueryParams(apiKey, searchTerm) {
	return `?api_key=${apiKey}&query=${searchTerm}`;
}

function parseMovies(response) {
	const searchResults = response.results.map((result) => {
		const releaseDate = new Date(result['release_date']);
		const pictureURI = imagePrefix + result['poster_path'];
		return new SearchResult(
			result['title'],
			result['overview'],
			releaseDate,
			pictureURI,
			'TheMovieDB',
			'/img/sources/themoviedb.png'
		);
	});
	return new SearchResultList(searchResults);
}

export default class MovieDBSearcher extends Searcher {

	constructor(apiKey) {
		super();
		this._apiKey = apiKey;
	}

	search(searchTerm) {
		return new Promise((resolve, reject) => {
			if (!searchTerm) {
				return resolve(new SearchResultList());
			}

			// TODO extract into a fetch module/use a library
			const queryParams = getQueryParams(this._apiKey, searchTerm);
			const xhr = new XMLHttpRequest();

			xhr.open('GET', apiURI + queryParams, true);

			xhr.onreadystatechange = () => {
				if (xhr.readyState === XMLHttpRequest.DONE) {
					const response = JSON.parse(xhr.response || "{}");
					if (xhr.status === 200 && response.results) {
						resolve(parseMovies(response));
					} else {
						reject(response['status_message']);
					}
				}
			};

			// For demonstration purposes
			setTimeout(() => {
				xhr.send();
			}, 500);
		});
	}

}

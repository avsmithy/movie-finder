export default class SearchResult {

	constructor(title, description, releaseDate, pictureURI) {
		this._title = title;
		this._description = description;
		this._releaseDate = releaseDate;
		this._pictureURI = pictureURI;
	}

	get title() {
		return this._title;
	}

	get description() {
		return this._description;
	}

	get releaseDate() {
		return this._releaseDate;
	}

	get pictureURI() {
		return this._pictureURI;
	}
}
import moment from 'moment';

function formatDate(date) {
	const momentDate = moment(date);
	return momentDate.isValid() ? momentDate.format('MMMM Do YYYY') : 'N/A';
}

export default class SearchResult {

	constructor(title, description, releaseDate, pictureURI, source, sourceImageURI) {
		this._title = title;
		this._description = description;
		this._releaseDate = formatDate(releaseDate);
		this._pictureURI = pictureURI;
		this._source = source;
		this._sourceImageURI = sourceImageURI;
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

	get source() {
		return this._source;
	}

	get sourceImageURI() {
		return this._sourceImageURI;
	}

}
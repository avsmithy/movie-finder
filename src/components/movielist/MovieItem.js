import React from 'react';
import './MovieItem.css';

export default function MovieItem({searchResult}) {

	return (
		<div className="MovieItem">
			<div className="MovieItem-left">
				<img className="MovieItem-image" alt="" src={searchResult.pictureURI}/>
			</div>
			<div className="MovieItem-right">
				<div className="MovieItem-title">{searchResult.title}</div>
				<div className="MovieItem-date">Released: {searchResult.releaseDate}</div>
				<div className="MovieItem-description">{searchResult.description}</div>
				<div className="MovieItem-source">
					<img alt={searchResult.source} src={searchResult.sourceImageURI}/>
				</div>
			</div>
		</div>
	);

}

MovieItem.propTypes = {
	searchResult: React.PropTypes.object.isRequired, // eslint-disable-line
};

import React from 'react';
import MovieItem from './MovieItem';
import './MovieList.css';

export default function MovieList({searchResultList}) {
	return (
		<div className="MovieList">
			{searchResultList.searchResults.map((searchResult, i) => {
				return (<MovieItem searchResult={searchResult} key={i} />);
			})}
		</div>
	);
}

MovieList.propTypes = {
	searchResultList: React.PropTypes.object.isRequired,  // eslint-disable-line
};

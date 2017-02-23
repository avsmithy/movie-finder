import React from 'react';
import SearchResultList from '../../search/results/SearchResultList';
import MovieItem from './MovieItem';
import './MovieList.css';

export default function MovieList({searchResultList}) {

	const showNoResultsText = searchResultList.searchResults.length === 0;

	const movieItems = searchResultList.searchResults.map((searchResult, i) => {
		return (<MovieItem searchResult={searchResult} key={i} />);
	});

	return (
		<div className="MovieList">
			{showNoResultsText &&
				<div className="MovieList-noResultsText">No results</div>
			}
			{movieItems}
		</div>
	);
}

MovieList.propTypes = {
	showNoResultsText: React.PropTypes.bool,
	searchResultList: React.PropTypes.instanceOf(SearchResultList).isRequired,
};

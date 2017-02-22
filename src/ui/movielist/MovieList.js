import React from 'react';
import SearchResultList from '../../api/results/SearchResultList';
import LoadingIndicator from '../utils/LoadingIndicator';
import MovieItem from './MovieItem';
import './MovieList.css';

export default function MovieList({isLoading, searchResultList}) {

	const showNoResultsText = (searchResultList.searchResults.length === 0 && isLoading === false);

	const movieItems = searchResultList.searchResults.map((searchResult, i) => {
		return (<MovieItem searchResult={searchResult} key={i} />);
	});

	return (
		<div className="MovieList">
			{isLoading && <LoadingIndicator />}
			{showNoResultsText && <div className="MovieList-noResultsText">No results found...</div>}
			{movieItems}
		</div>
	);
}

MovieList.propTypes = {
	isLoading: React.PropTypes.bool,
	searchResultList: React.PropTypes.instanceOf(SearchResultList).isRequired,
};

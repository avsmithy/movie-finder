import React from 'react';
import SearchResultList from '../../api/results/SearchResultList';
import LoadingIndicator from '../utils/LoadingIndicator';
import MovieItem from './MovieItem';
import './MovieList.css';

export default function MovieList({isLoading, searchResultList}) {
	return (
		<div className="MovieList">
			{isLoading && <LoadingIndicator />}
			{searchResultList.searchResults.map((searchResult, i) => {
				return (<MovieItem searchResult={searchResult} key={i} />);
			})}
		</div>
	);
}

MovieList.propTypes = {
	isLoading: React.PropTypes.bool,
	searchResultList: React.PropTypes.instanceOf(SearchResultList).isRequired,
};

import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import SearchResultList from '../../search/results/SearchResultList';
import MovieItem from './MovieItem';
import './MovieList.css';

export default function MovieList({searchResultList}) {

	const showNoResultsText = searchResultList.searchResults.length === 0;

	const movieItems = searchResultList.searchResults.map((searchResult, i) => {
		return (<MovieItem searchResult={searchResult} key={searchResult.pictureURI + i} />);
	});

	return (
		<div className="MovieList">
			{showNoResultsText &&
				<div className="MovieList-noResultsText">No results</div>
			}
			<ReactCSSTransitionGroup
				transitionName="fadeIn"
				transitionEnter={true}
				transitionLeave={true}
				transitionEnterTimeout={300}
				transitionLeaveTimeout={300}>
				<div className="MovieList-list" key={searchResultList.searchResults.length && searchResultList.searchResults[0].pictureURI}>
					{movieItems}
				</div>
			</ReactCSSTransitionGroup>
		</div>
	);
}

MovieList.propTypes = {
	showNoResultsText: React.PropTypes.bool,
	searchResultList: React.PropTypes.instanceOf(SearchResultList).isRequired,
};

import React from 'react';
import LoadingIndicator from './utils/LoadingIndicator';
import SearchResultList from '../api/results/SearchResultList';
import Searcher from '../api/searchers/Searcher';
import Container from './container/Container';
import SearchBox from './searchbox/SearchBox';
import MovieList from './movielist/MovieList';

export default class App extends React.Component {

	constructor() {
		super();
		this.state = {
			isLoading:        false,
			searchResultList: new SearchResultList(),
		};
	}

	render() {
		return (
			<Container>
				{this.state.isLoading && <LoadingIndicator />}
				<SearchBox onChange={this.props.actions.searchForMovie}/>
				<MovieList searchResultList={this.state.searchResultList}/>
			</Container>
		);
	}

}

App.propTypes = {
	actions: React.PropTypes.object.isRequired,
	searcher: React.PropTypes.instanceOf(Searcher).isRequired,
};
import React from 'react';
import SearchResultList from '../search/results/SearchResultList';
import LoadingIndicator from './utils/LoadingIndicator';
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
				<SearchBox onChange={this.props.searchForMovies}/>
				<MovieList searchResultList={this.state.searchResultList}/>
			</Container>
		);
	}

}

App.propTypes = {
	searchForMovies: React.PropTypes.func.isRequired
};
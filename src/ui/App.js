import React from 'react';
import SearchResultList from '../api/results/SearchResultList';
import Searcher from '../api/searchers/Searcher';
import Container from './container/Container';
import SearchBox from './searchbox/SearchBox';
import MovieList from './movielist/MovieList';

export default class App extends React.Component {

	constructor() {
		super();
		this.state = {
			searchResultList: new SearchResultList(),
		};

		this.searchAndUpdate = this.searchAndUpdate.bind(this);
	}

	searchAndUpdate(searchTerm) {
		this.props.searcher.search(searchTerm).then((searchResultList) => {
			this.setState({searchResultList});
		});
	}

	render() {
		return (
			<Container>
				<SearchBox onChange={this.searchAndUpdate} />
				<MovieList searchResultList={this.state.searchResultList} />
			</Container>
		);
	}

}

App.propTypes = {
	searcher: React.PropTypes.instanceOf(Searcher).isRequired,
};
import React from 'react';
import SearchResultList from '../api/SearchResultList';
import Searcher from '../api/Searcher'; // TODO Interface
import Container from './Container';
import SearchBox from './SearchBox';
import MovieList from './MovieList';

export default class App extends React.Component {

	constructor() {
		super();
		this.state = {
			searchResultList: new SearchResultList(), // TODO abstract?
		};

		this.searchAndUpdate = this.searchAndUpdate.bind(this);
	}

	searchAndUpdate(searchTerm) {
		this.props.searcher.search(searchTerm).then((searchResultList) => {
			this.setState({
				searchResultList: searchResultList[0] // TODO I am very confused
			});
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
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
			isLoading:        false,
			searchResultList: new SearchResultList(),
		};

		this.searchAndUpdate = this.searchAndUpdate.bind(this);
	}

	searchAndUpdate(searchTerm) {
		this.setState({
			isLoading: true
		});
		this.props.searcher.search(searchTerm).then((searchResultList) => {
			this.setState({
				isLoading: false,
				searchResultList
			});
		});
	}

	render() {
		return (
			<Container>
				<SearchBox onChange={this.searchAndUpdate}/>
				<MovieList isLoading={this.state.isLoading} searchResultList={this.state.searchResultList}/>
			</Container>
		);
	}

}

App.propTypes = {
	searcher: React.PropTypes.instanceOf(Searcher).isRequired,
};
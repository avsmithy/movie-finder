import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import SearchResultList from '../search/results/SearchResultList';
import SearchBox from './searchbox/SearchBox';
import MovieList from './movielist/MovieList';
import LoadingIndicator from './utils/LoadingIndicator';

it('renders without errors', () => {
	shallow(<App searchForMovies={jest.fn()} />);
});

it('does not render loading indicator when isLoading is true', () => {
	const wrapper = shallow(<App searchForMovies={jest.fn()} />);
	wrapper.setState({isLoading: false});
	expect(wrapper.contains(<LoadingIndicator />)).toEqual(false);
});

it('renders loading indicator when isLoading is true', () => {
	const wrapper = shallow(<App searchForMovies={jest.fn()} />);
	wrapper.setState({isLoading: true});
	expect(wrapper.contains(<LoadingIndicator />)).toEqual(true);
});

it('renders a SearchBox', () => {
	const callback = jest.fn();
	const expected = <SearchBox onChange={callback} />;
	const wrapper = shallow(<App searchForMovies={callback} />);
	expect(wrapper.contains(expected)).toEqual(true);
});

it('renders a MovieList', () => {
	const searchResultList = new SearchResultList();
	const expected = <MovieList searchResultList={searchResultList} />;
	const wrapper = shallow(<App searchForMovies={jest.fn()} />);
	wrapper.setState({searchResultList});
	expect(wrapper.contains(expected)).toEqual(true);
});
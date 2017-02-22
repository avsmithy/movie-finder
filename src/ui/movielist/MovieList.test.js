import 'jest';
import React from 'react';
import SearchResultList from '../../api/results/SearchResultList';
import LoadingIndicator from '../utils/LoadingIndicator';
import MovieList from './MovieList';
import MovieItem from './MovieItem';
import {shallow, mount} from 'enzyme';

it('renders without errors', () => {
	const searchResultList = new SearchResultList();
	const wrapper = shallow(
		<MovieList
			isLoading={false}
			searchResultList={searchResultList}
		/>
	);
	expect(wrapper.find('.MovieList').length).toEqual(1);
});

it('if the are no results, show no results text', () => {
	const searchResultList = new SearchResultList();
	const wrapper = shallow(
		<MovieList
			isLoading={false}
			searchResultList={searchResultList}
		/>
	);
	expect(wrapper.find('.MovieList-noResultsText').length).toEqual(1);
});

it('renders MovieItem children when there are search results', () => {
	const result1 = {test: 'a'};
	const result2 = {test: 'b'};
	const searchResultList = new SearchResultList([result1, result2]);
	const wrapper = shallow(
		<MovieList
			isLoading={false}
			searchResultList={searchResultList}
		/>
	);
	expect(wrapper.find(MovieItem).first().props().searchResult).toEqual(result1);
	expect(wrapper.find(MovieItem).last().props().searchResult).toEqual(result2);
});

import 'jest';
import React from 'react';
import SearchResult from '../../search/results/SearchResult';
import MovieItem from './MovieItem';
import {shallow, mount} from 'enzyme';

function getSearchResult() {
	return new SearchResult(
		'Bond',
		'movie description',
		new Date(0),
		'imageuri',
		'themoviedb',
		'moviedb.png'
	);
}

it('renders without errors', () => {
	const wrapper = shallow(<MovieItem searchResult={getSearchResult()} />);
	expect(wrapper.find('.MovieItem').length).toEqual(1);
});

it('renders correct data', () => {
	const wrapper = shallow(<MovieItem searchResult={getSearchResult()} />);
	expect(wrapper.find('.MovieItem-title').text()).toEqual('Bond');
	expect(wrapper.find('.MovieItem-description').text()).toEqual('movie description');
	expect(wrapper.find('.MovieItem-date').text()).toEqual('Released: January 1st 1970');
	expect(wrapper.find('.MovieItem-image img').props().src).toEqual('imageuri');
	expect(wrapper.find('.MovieItem-source img').props().alt).toEqual('themoviedb');
	expect(wrapper.find('.MovieItem-source img').props().src).toEqual('moviedb.png');
});

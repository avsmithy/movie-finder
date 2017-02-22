import React from 'react';
import App from './App';
import Searcher from '../api/searchers/Searcher';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
	shallow(<App searcher={new Searcher()} />);
});
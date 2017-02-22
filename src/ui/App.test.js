import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Searcher from '../api/searchers/Searcher';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<App searcher={new Searcher()} />, div);
});

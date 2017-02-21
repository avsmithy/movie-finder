import React from 'react';
import ReactDOM from 'react-dom';
import Searcher from './api/Searcher';
import App from './ui/App';
import './index.css';

ReactDOM.render(
	<App searcher={new Searcher()} />,
	document.getElementById('root'),
);

import React from 'react';
import ReactDOM from 'react-dom';
import SearcherFactory from './api/SearcherFactory';
import App from './ui/App';
import './index.css';

ReactDOM.render(
	<App searcher={SearcherFactory.create()} />,
	document.getElementById('root'),
);

import React from 'react';
import ReactDOM from 'react-dom';
import SearcherFactory from './api/SearcherFactory';
import Controller from './ui/Controller';
import App from './ui/App';
import './index.css';

const searcher = SearcherFactory.create();
const controller = new Controller(searcher);
const actions = controller.getActions();

const app = ReactDOM.render(
	<App searcher={searcher} actions={actions} />,
	document.getElementById('root'),
);

controller.setApp(app);

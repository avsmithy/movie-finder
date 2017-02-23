import Main from './Main';
import SearcherFactory from './search/SearcherFactory';
import './index.css';

new Main(SearcherFactory.create());

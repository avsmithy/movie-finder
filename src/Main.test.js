import {shallow} from 'enzyme';
import Main from './Main';
import ReactDOM from 'react-dom';

jest.mock('react-dom', () => {
	return {
		render: jest.fn()
	}
});

let searcherStub;
let componentStub;

beforeEach(() => {
	jest.resetAllMocks();
	jest.useFakeTimers();

	searcherStub = {
		search: jest.fn(() => 'abc'),
	};
	componentStub = {
		setState: jest.fn()
	};
	ReactDOM.render = jest.fn(() => componentStub);
});

it('renders a react component', () => {
	new Main(searcherStub);
	expect(ReactDOM.render).toHaveBeenCalledTimes(1);
});

it('#searchForMovies sets App state to isLoading:true', () => {
	const main = new Main(searcherStub);

	main.searchForMovies('test');
	expect(componentStub.setState).toHaveBeenCalledWith({
		isLoading: true
	});
});

// TODO debounce + Promises not working properly in node
// it('#searchForMovies calls search on searcher with debouncing', () => {
// 	const main = new Main(searcherStub);
//
// 	main.searchForMovies('hello1');
// 	jest.runTimersToTime(10);
// 	expect(searcherStub.search).not.toHaveBeenCalled();
//
// 	main.searchForMovies('hello2');
// 	jest.runAllTimers();
// 	expect(searcherStub.search).toHaveBeenCalledTimes(1);
// 	expect(searcherStub.search).toHaveBeenCalledWith('hello2');
// });
//
// it('#searchForMovies setState on App when resolved', () => {
// 	const main = new Main(searcherStub);
// 	main.sendQuery('hello');
//
// 	expect(componentStub.setState).toHaveBeenCalledWith({
// 		isLoading: false,
// 		searchResultList: 'abc'
// 	});
// });

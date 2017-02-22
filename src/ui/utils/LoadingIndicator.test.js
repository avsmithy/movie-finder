import React from 'react';
import LoadingIndicator from './LoadingIndicator';
import {shallow} from 'enzyme';

it('renders without errors', () => {
	const wrapper = shallow(<LoadingIndicator />);
	expect(wrapper.find('.LoadingIndicator').length).toEqual(1);
});

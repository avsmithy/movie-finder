import React from 'react';
import Container from './Container';
import {shallow} from 'enzyme';

it('renders without errors', () => {
	const wrapper = shallow(<Container />);
	expect(wrapper.find('.Container').length).toEqual(1);
});

it('renders children', () => {
	const child = <span>test</span>;
	const wrapper = shallow(<Container>{child}</Container>);
	expect(wrapper.contains(child)).toEqual(true);
});

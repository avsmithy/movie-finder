import 'jest';
import React from 'react';
import SearchBox from './SearchBox';
import {shallow, mount} from 'enzyme';

it('renders without errors', () => {
	const onChangeStub = jest.fn();
	const wrapper = shallow(<SearchBox onChange={onChangeStub}/>);
	expect(wrapper.find('.SearchBox').length).toEqual(1);
});

it('input is updated when text entered', () => {
	const wrapper = mount(<SearchBox onChange={jest.fn()}/>);
	const input = wrapper.find('input');

	expect(input.props().value).toEqual('');
	input.simulate('change', {target: {value: 'a'}});
	expect(input.props().value).toEqual('a');
});

it('calls onChange prop when text changed', () => {
	const onChangeStub = jest.fn();
	const wrapper = mount(<SearchBox onChange={onChangeStub}/>);
	expect(onChangeStub).not.toBeCalled();

	wrapper.find('input').simulate('change', {target: {value: 'abc'}});
	expect(onChangeStub).toBeCalledWith('abc');
});

import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import expect from 'expect.js';
import CustomInput from '../../components/CustomInput';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CustomInput />, div);
})

it('renders errors', () => {
  const wrapper = shallow(<CustomInput constraints={{presence: true}} errors={ ["error msg 1", "error msg 2"] } />)
  expect(wrapper.find('.error-message')).to.have.length(2)

  wrapper.find('input').simulate('blur')

  expect(wrapper.find('.error-message')).to.have.length(1)
  expect(wrapper.find('.error-message').text()).to.contain("can't be blank")

  wrapper.find('input').simulate('change', {target: {value: 'test value'}}).simulate('blur')

  expect(wrapper.find('.error-message')).to.have.length(0)
})

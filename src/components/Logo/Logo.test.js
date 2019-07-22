import React from 'react';
import Logo from './Logo';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const logo = shallow(<Logo />);

it('renders correctly', () => {
  expect(logo).toMatchSnapshot();
});
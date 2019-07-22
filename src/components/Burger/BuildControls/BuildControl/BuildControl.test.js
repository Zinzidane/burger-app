import React from 'react';
import BuildControl from './BuildControl';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const buildControl = shallow(<BuildControl />);

it('renders correctly', () => {
  expect(buildControl).toMatchSnapshot();
});
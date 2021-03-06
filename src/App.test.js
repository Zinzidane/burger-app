import React from 'react';
import App from './App';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const app = shallow(<App />);

it('renders correctly', () => {
  expect(app).toMatchSnapshot();
});
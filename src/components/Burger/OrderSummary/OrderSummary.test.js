import React from 'react';
import OrderSummary from './OrderSummary';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<OrderSummary />', () => {
  let wrapper;

  const props = {
    ingredients: [],
    price: 0
  };
  beforeEach(() => {
    wrapper = shallow(<OrderSummary {...props} />);
  })

  it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
  });
  
});
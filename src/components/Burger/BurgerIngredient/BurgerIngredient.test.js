import React from 'react';
import BurgerIngredient from './BurgerIngredient';
import classes from './BurgerIngredient.css';

import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


describe('<Burger />', () => {
  let wrapper;
  const props = {
      type: 'bread-top'
  };
  beforeEach(() => {
    wrapper = shallow(<BurgerIngredient  {...props} />, {context: {classes}});
  });

  it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
  });
  
});
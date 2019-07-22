import React from 'react';
import BurgerIngredient from './BurgerIngredient';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const burgerIngredient = shallow(<BurgerIngredient />);

it('renders correctly', () => {
  expect(burgerIngredient).toMatchSnapshot();
});
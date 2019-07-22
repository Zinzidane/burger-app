import React from 'react';
import Burger from './Burger';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<Burger />', () => {
    let wrapper;
    const props = {
        ingredients: []
    };
    beforeEach(() => {
      wrapper = shallow(<Burger  {...props} />);
      
    });

    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
    it('should render two <BurgerIngredient /> elements if no ingredients added', () => {
        wrapper.setProps({ ingredients: [] });
        expect(wrapper.find(BurgerIngredient)).toHaveLength(2);
    });
});
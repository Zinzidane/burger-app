import React from 'react';
import BuildControls from './BuildControls';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<BuildControls />', () => {
    let wrapper;

    const props = {
      price: 0,
      purchasable: false,
      ordered: false,
      isAuth: false,
      disabled: {
        salad: false,
        bacon: false,
        cheese: false,
        meat: false
      }
    };
    beforeEach(() => {
      const controls = [
        { label: 'Salad', type: 'salad' },
        { label: 'Bacon', type: 'bacon' },
        { label: 'Cheese', type: 'cheese' },
        { label: 'Meat', type: 'meat' },
      ];
      wrapper = shallow(<BuildControls {...props}/>);
    })

    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
});
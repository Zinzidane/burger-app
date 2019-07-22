import React from 'react';
import BuildControls from './BuildControls';
import BuildControl from './BuildControl/BuildControl';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<BuildControls />', () => {
    let wrapper;

    const props = {
      price: 0,
      purchasable: false,
      ordered: false,
      isAuth: false
    };
    beforeEach(() => {
      const controls = [
        { label: 'Salad', type: 'salad' },
        { label: 'Bacon', type: 'bacon' },
        { label: 'Cheese', type: 'cheese' },
        { label: 'Meat', type: 'meat' },
      ];
      wrapper = shallow(<BuildControls {...props}/>);
      // wrapper.setContext(controls);
      console.log(wrapper);
    })

    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should have the right context', () => {
      wrapper.setContext({controls: 0});
      expect(wrapper.context().controls).to.equal(0);
    });
    
});
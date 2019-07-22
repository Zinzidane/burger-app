import React from 'react';
import CheckoutSummary from './CheckoutSummary';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<CheckoutSummary />', () => {
    let wrapper;
    const props = {
        ingredients: [],
        price: 0
    };
    beforeEach(() => {
      wrapper = shallow(<CheckoutSummary  {...props} />);
      
    });

    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

});
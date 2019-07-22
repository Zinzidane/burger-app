import React from 'react';
import Order from './Order';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<Order />', () => {
    let wrapper;
    const props = {
        ingredients: [],
        price: 0
    };
    beforeEach(() => {
      wrapper = shallow(<Order  {...props} />);
      
    });

    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
    

});
import React from 'react';
import Button from './Button';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<Button />', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Button />);
      
    });

    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
    

});
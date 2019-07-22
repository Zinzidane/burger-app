import React from 'react';
import Input from './Input';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<Input />', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Input />);
      
    });

    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
    

});